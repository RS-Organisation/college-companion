import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

import { facultyLogin } from '../../redux/actions/facultyActions';
import { studentLogin } from '../../redux/actions/studentActions';

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
  const [formData, setFormData] = useState(initialDetails);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.userType === 'student') {
      const data = {
        enrollmentNumber: formData.enrollmentNumber,
        password: formData.password,
      };
      return dispatch(studentLogin(data, history));
    }
    if (formData.userType === 'faculty') {
      const data = {
        registrationNumber: formData.registrationNumber,
        password: formData.password,
      };
      return dispatch(facultyLogin(data, history));
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSwitch = (userType) => {
    setFormData({ ...initialDetails, userType });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleAdminButton = () => {
    history.push('/admin/login');
  };

  return (
    <div className={classes.main}>
      <Button onClick={handleAdminButton} className={classes.adminButton}>
        Admin <ForwardIcon />
      </Button>
      <div className={classes.contentBox}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} className={classes.imageGrid}>
            <img src={loginImage} alt='login' className={classes.loginImage} />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.loginGrid}>
            <div className={classes.loginGridDiv}>
              <h3 className={classes.title}>Welcome</h3>
              <div classesName={classes.buttonDiv}>
                <Button
                  variant='contained'
                  onClick={() => handleSwitch('student')}
                  className={`${classes.studentButton} ${formData.userType === 'student'
                    ? classes.selectedButton
                    : classes.nonSelectedButton
                    }`}
                >
                  Student Login
                </Button>
                <Button
                  variant='contained'
                  onClick={() => handleSwitch('faculty')}
                  className={`${classes.facultyButton} ${formData.userType === 'faculty'
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
                />
                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  className={classes.loginButton}
                >
                  Login
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
