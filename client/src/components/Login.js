import { React, Fragment } from 'react';
import { Button, Grid, TextField, InputLabel } from '@material-ui/core';
import loginImage from '../images/loginImage.svg';
import useStyles from '../styles/Login';

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={6}>
        <img src={loginImage} alt='login' />
      </Grid>
      <Grid item xs={12} lg={6} className={classes.grid}>
        <div className={classes.formGrid}>
          <h3>Get's started.</h3>
          <div classesName={classes.buttonDiv}>
            <Button variant='contained' className={classes.studentButton}>
              Student Login
            </Button>
            <Button
              variant='contained'
              color='primary'
              className={classes.facultyButton}
            >
              Faculty Login
            </Button>
          </div>
          <div>
            <form className={classes.form}>
              <div className={classes.formInputs}>
                <span className={classes.spanText}>Enrollment number</span>
                <TextField variant='outlined' />
              </div>
              <div className={classes.formInputs}>
                <span className={classes.spanText}>Password</span>
                <TextField variant='outlined' type='password' />
              </div>
            </form>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
