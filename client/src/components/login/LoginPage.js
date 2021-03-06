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
import { facultyLogin } from '../../redux/actions/facultyActions';
import { studentLogin } from '../../redux/actions/studentActions';
import { validator } from '../utils/helperFunctions';

import SubmitLoader from '../utils/SubmitLoader';
import loginImage from '../../images/loginImage.svg';
import useStyles from '../../styles/LoginPage';

const initialDetails = {
  registrationNumber: '',
  enrollmentNumber: '',
  password: '',
  userType: 'student',
};

const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialDetails);
  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userType === 'student') {
      const requiredFields = ['enrollmentNumber', 'password'];
      const data = {
        enrollmentNumber: formData.enrollmentNumber,
        password: formData.password,
      };
      const flag = validator(formData, requiredFields);
      if (flag === true) {
        setErrors(null);
        setIsLoading(true);
        dispatch(studentLogin(data, history)).then(() => {
          setFormData(initialDetails);
          setIsLoading(false);
        });
      } else {
        setErrors(flag);
      }
      return;
    }
    if (formData.userType === 'faculty') {
      const requiredFields = ['registrationNumber', 'password'];
      const data = {
        registrationNumber: formData.registrationNumber,
        password: formData.password,
      };
      const flag = validator(formData, requiredFields);
      if (flag === true) {
        setErrors(null);
        setIsLoading(true);
        dispatch(facultyLogin(data, history)).then(() => {
          setFormData(initialDetails);
          setIsLoading(false);
        });
      } else {
        setErrors(flag);
      }
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSwitch = (userType) => {
    setFormData({ ...initialDetails, userType });
    setErrors(null);
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleAdminButton = () => {
    history.push('/admin/login');
  };

  return (
    <div className={classes.main}>
      <BrandLogo />
      <Button onClick={handleAdminButton} className={classes.adminButton}>
        Admin <ForwardIcon />
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
              <div classesName={classes.buttonDiv}>
                <Button
                  variant='contained'
                  onClick={() => handleSwitch('student')}
                  className={`${classes.studentButton} ${
                    formData.userType === 'student'
                      ? classes.selectedButton
                      : classes.nonSelectedButton
                  }`}
                >
                  Student Login
                </Button>
                <Button
                  variant='contained'
                  onClick={() => handleSwitch('faculty')}
                  className={`${classes.facultyButton} ${
                    formData.userType === 'faculty'
                      ? classes.selectedButton
                      : classes.nonSelectedButton
                  }`}
                >
                  Faculty Login
                </Button>
              </div>
              <Divider variant='middle' className={classes.divider} />
              <form
                className={classes.root}
                autoComplete='off'
                onSubmit={handleSubmit}
              >
                <TextField
                  name={
                    formData.userType === 'student'
                      ? 'enrollmentNumber'
                      : 'registrationNumber'
                  }
                  value={
                    formData.userType === 'student'
                      ? formData.enrollmentNumber
                      : formData.registrationNumber
                  }
                  onChange={handleChange}
                  className={classes.formField}
                  label={
                    formData.userType === 'student'
                      ? 'Enrollment Number'
                      : 'Registration Number'
                  }
                  variant='outlined'
                  size='small'
                  type='text'
                  {...(errors && {
                    error:
                      formData.userType === 'student'
                        ? errors.enrollmentNumber !== ''
                        : errors.registrationNumber !== '',
                    helperText:
                      formData.userType === 'student'
                        ? errors.enrollmentNumber
                        : errors.registrationNumber,
                  })}
                />
                <TextField
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className={classes.formField}
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
                  aboutProps: { userType: formData.userType },
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

export default LoginPage;
