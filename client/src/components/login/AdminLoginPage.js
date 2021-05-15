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

import { adminLogin } from '../../redux/actions/adminActions';

import loginImage from '../../images/loginImage.svg';
import useStyles from '../../styles/LoginPage';

const initialDetails = {
  registrationNumber: '',
  password: '',
};

const AdminLoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialDetails);

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSwitchLogin = () => {
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin(formData, history));
  };

  const handleChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <div className={classes.main}>
      <Button onClick={handleSwitchLogin} className={classes.adminButton}>
        Student/Faculty <ForwardIcon />
      </Button>
      <div className={classes.contentBox}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={6} className={classes.imageGrid}>
            <img src={loginImage} alt='login' className={classes.loginImage} />
          </Grid>
          <Grid item xs={12} lg={6} className={classes.loginGrid}>
            <div className={classes.loginGridDiv}>
              <h3 className={classes.title}>Welcome</h3>
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

export default AdminLoginPage;
