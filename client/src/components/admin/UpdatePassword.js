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

import { updateAdminDetails } from '../../redux/actions/adminActions';

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

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      const changes = {
        password: newPassword,
      };
      dispatch(updateAdminDetails(changes));
      setNewPassword('');
      setConfirmPassword('');
    }
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
            />
            <TextField
              label='Confirm Password'
              variant='outlined'
              size='small'
              type='password'
              value={confirmPassword}
              className={classes.formField}
              onChange={handleConfirmPasswordChange}
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
                onClick={() => setShowForm(false)}
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
