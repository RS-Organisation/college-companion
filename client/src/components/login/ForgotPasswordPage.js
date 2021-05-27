import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Typography, Button } from '@material-ui/core';

import { validator } from '../utils/helperFunctions';
import { sendEmail } from '../../redux/actions/api/index';

import forgotPasswordIcon from '../../images/forgotPasswordIcon.png';
import useStyles from '../../styles/ForgotPasswordPage';

const ForgotPasswordPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);

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
      await sendEmail({ email, userType })
      // .then(response => {
      //   console.log(response.data);
      //   if (response.data === 'email not in db') {

      //   }
      // })
    } else {
      setErrors(flag);
    }
  };

  return (
    <div className={classes.main}>
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
            <Button
              variant='contained'
              type='submit'
              className={classes.filledButton}
            >
              Send Link
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
