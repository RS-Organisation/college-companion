import { React, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Grid,
  Button,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ForwardIcon from '@material-ui/icons/Forward';
import FavoriteIcon from '@material-ui/icons/Favorite';

import BrandLogo from '../utils/BrandLogo';
import { adminLogin } from '../../redux/actions/adminActions';
import { validator } from '../utils/helperFunctions';

import loginImage from '../../images/loginImage.svg';
import useStyles from '../../styles/LoginPage';

import SubmitLoader from '../utils/SubmitLoader';

const initialDetails = {
  registrationNumber: '',
  password: '',
};

const AdminLoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialDetails);
  const [errors, setErrors] = useState(null);

  const requiredFields = ['registrationNumber', 'password'];

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSwitchLogin = () => {
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flag = validator(formData, requiredFields);
    if (flag === true) {
      setErrors(null);
      setIsLoading(true);
      dispatch(adminLogin(formData, history)).then(() => {
        setFormData(initialDetails);
        setIsLoading(false);
      });
    } else {
      setErrors(flag);
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className={classes.main}>
      <BrandLogo />
      <Button onClick={handleSwitchLogin} className={classes.adminButton}>
        Student/Faculty <ForwardIcon />
      </Button>
      <p className={classes.footerText}>
        Made with <FavoriteIcon className={classes.loveIcon} /> by Roopin Bhadri & Shikhar Rastogi
      </p>
      <div className={classes.contentBox}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} className={classes.imageGrid}>
            <img src={loginImage} alt='login' className={classes.loginImage} />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.loginGrid}>
            <div className={classes.loginGridDiv}>
              <h3 className={classes.title}>Welcome Back !</h3>
              <Divider variant='middle' className={classes.adminDivider} />
              <form
                className={classes.root}
                autoComplete='off'
                onSubmit={handleSubmit}
              >
                <TextField
                  name='registrationNumber'
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className={classes.formField}
                  label='Registration Number'
                  variant='outlined'
                  size='small'
                  type='text'
                  {...(errors && {
                    error: errors.registrationNumber !== '',
                    helperText: errors.registrationNumber,
                  })}
                />
                <TextField
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={classes.formField}
                  id='outlined-basic'
                  label='Password'
                  variant='outlined'
                  size='small'
                  type={showPassword ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...(errors && {
                    error: errors.password !== '',
                    helperText: errors.password,
                  })}
                />
                {isLoading ? (
                  <SubmitLoader />
                ) : (
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.loginButton}
                  >
                    Login
                  </Button>
                )}
              </form>
              <Link
                to={{
                  pathname: '/reset',
                  aboutProps: { userType: 'admin' },
                }}
                className={classes.forgotLink}
              >
                Forgot password?
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AdminLoginPage;
