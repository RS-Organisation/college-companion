import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {
  resetPassword,
  updatePasswordViaEmail
} from '../../redux/actions/api/index';

import useStyles from '../../styles/ResetPasswordPage';

import { validator } from '../utils/helperFunctions';

const ResetPasswordPage = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState({ id: '', type: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const { userType, token } = props.match.params;
    async function fetchData() {
      const { data } = await resetPassword({ userType, token });
      if (data.success) {
        setUser({ id: data.id, type: userType });
      } else {
        // Add snackbar
        console.log('error');
      }
    }
    fetchData();
  }, [props.match.params]);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (errors) {
      setErrors({ ...errors, newPassword: '' });
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (errors) {
      setErrors({ ...errors, confirmPassword: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const flag = validator(
      { newPassword, confirmPassword },
      ['newPassword', 'confirmPassword']
    );
    if (flag === true) {
      setErrors(null);
      if (newPassword === confirmPassword) {
        await updatePasswordViaEmail({
          id: user.id,
          userType: user.type,
          password: newPassword
        });
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setErrors({
          newPassword: '',
          confirmPassword: "Passwords don't match",
        });
      }
    } else {
      setErrors(flag);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.contentBox}>
        <Typography variant='h4' className={classes.heading}>
          Reset Password
        </Typography>
        <form
          autoComplete='off'
          className={`${classes.root}`}
          onSubmit={handleSubmit}
        >
          <div className={classes.textContainer}>
            <TextField
              label='New Password'
              variant='outlined'
              size='small'
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className={classes.formField}
              onChange={handleNewPasswordChange}
              {...(errors && {
                error: errors.newPassword !== '',
                helperText: errors.newPassword,
              })}
            />
          </div>
          <div className={classes.textContainer}>
            <TextField
              label='Confirm Password'
              variant='outlined'
              size='small'
              type='password'
              value={confirmPassword}
              className={classes.formField}
              onChange={handleConfirmPasswordChange}
              {...(errors && {
                error: errors.confirmPassword !== '',
                helperText: errors.confirmPassword,
              })}
            />
          </div>
          <div className={classes.textContainer}>
            <Button
              variant='contained'
              type='submit'
              className={classes.filledButton}
            >
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordPage;

