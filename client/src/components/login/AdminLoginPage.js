import { React, useState } from 'react';
import loginImage from '../../images/loginImage.svg';
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
import useStyles from '../../styles/LoginPage';

const AdminLoginPage = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('student');

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className={classes.main}>
      <Button variant='outlined' className={classes.adminButton}>
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
              <form className={classes.root} autoComplete='off'>
                <TextField
                  className={classes.formField}
                  id='outlined-basic'
                  label='Registration Number'
                  variant='outlined'
                  size='small'
                  type='text'
                />
                <TextField
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
