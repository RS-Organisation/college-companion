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

import { updateFacultyDetails } from '../../redux/actions/facultyActions';
import { validator } from '../utils/helperFunctions';

import useStyles from '../../styles/UpdatePassword';
import useStylesCommon from '../../styles/CommonStyles';

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

  const requiredFields = ['newPassword', 'confirmPassword'];

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      newPassword,
      confirmPassword,
    };
    const flag = validator(details, requiredFields);
    if (flag === true) {
      setErrors(null);
      if (newPassword === confirmPassword) {
        const changes = {
          password: newPassword,
        };
        dispatch(updateFacultyDetails(changes));
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
              value={newPassword}
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
