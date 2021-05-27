import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { updateStudentDetails } from '../../redux/actions/studentActions';

import useStyles from '../../styles/UpdatePassword';
import useStylesCommon from '../../styles/CommonStyles';

import { validator } from '../utils/helperFunctions';

const UpdatePassword = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState(null);

  // should contain only required fields
  const fieldsToCheck = ['newPassword', 'confirmPassword'];

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (newPassword === confirmPassword) {
  //     const changes = {
  //       password: newPassword,
  //     };
  //     dispatch(updateStudentDetails(changes));
  //     setNewPassword('');
  //     setConfirmPassword('');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      newPassword,
      confirmPassword,
    };
    // if flag is true means there is no error in form and
    // if there is any error then flag will contain errors object
    const flag = validator(details, fieldsToCheck);
    if (flag === true) {
      setErrors(null);
      if (newPassword === confirmPassword) {
        const changes = {
          password: newPassword,
        };
        dispatch(updateStudentDetails(changes));
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

  const handleCancel = () => {
    setShowForm(false);
    setNewPassword('');
    setConfirmPassword('');
    setErrors(null);
  };

  return (
    <div>
      <Typography variant='h5' className={classes.heading}>
        Password
      </Typography>
      <div className={classes.formContainer}>
        {!showForm ? (
          <Button
            variant='contained'
            onClick={() => setShowForm(true)}
            className={classes.filledButton}
          >
            Change Password
          </Button>
        ) : (
          <form
            autoComplete='off'
            className={`${classes.root} ${classes.form30}`}
            onSubmit={handleSubmit}
          >
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
            <div className={classes.buttonDiv}>
              <Button
                variant='contained'
                type='submit'
                className={classes.filledButton}
              >
                Save Changes
              </Button>
              <Button
                variant='contained'
                onClick={handleCancel}
                className={classes.outlinedButton}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdatePassword;
