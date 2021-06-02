import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Typography, Button } from '@material-ui/core';

import { setSnackbar } from '../../redux/actions/snackbarActions';
import { validator } from '../utils/helperFunctions';
import { sendEmail } from '../../redux/actions/api/index';
import BrandLogo from '../utils/BrandLogo';
import SubmitLoader from '../utils/SubmitLoader';

import resetLoader from '../../images/resetLoader.gif';
import forgotPasswordIcon from '../../images/forgotPasswordIcon.png';
import useStyles from '../../styles/ForgotPasswordPage';

const ForgotPasswordPage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const userType = props?.location?.aboutProps?.userType;
  if (!userType) {
    history.push('/');
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleReturn = () => {
    if (userType === 'admin') {
      history.push('/admin/login');
    }
    else {
      history.push('/');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const flag = validator({ email }, ['email']);
    if (flag === true) {
      setErrors(null);
      setLoading(true);
      await sendEmail({ email, userType }).then((res) => {
        dispatch(setSnackbar({
          snackbarType: 'success',
          snackbarMessage: res.data.message
        }));
        setLoading(false);
      }).catch((err) => {
        dispatch(setSnackbar({
          snackbarType: 'error',
          snackbarMessage: err.response.data.message
        }));
        setLoading(false);
      });
    } else {
      setErrors(flag);
    }
  };

  return (
    <div className={classes.main}>
      <BrandLogo />
      <Button onClick={handleReturn} className={classes.returnButton}>
        Return to Login
      </Button>
      <div className={classes.container}>
        <img
          src={forgotPasswordIcon}
          alt='forgot-password'
        />
        <Typography variant='h4' className={classes.title}>
          Forgot Your Password ?
        </Typography>
        <Typography variant='h6' className={classes.subtitle}>
          No worries! Enter your email and we'll send you a link to reset your password.
        </Typography>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField
            label='Email Address'
            size="small"
            value={email}
            onChange={handleChangeEmail}
            className={classes.inputTextField}
            {...(errors && {
              error: errors.email !== '',
              helperText: errors.email,
            })}
          />
          <div className={classes.buttonContainer}>
            {loading ? (
              <SubmitLoader loaderImage={resetLoader} />
            ) : (
              <Button
                variant='contained'
                type='submit'
                className={classes.filledButton}
              >
                Send Link
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
