import 'date-fns';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
  MenuItem,
  Modal,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';

import {
  updateAdminDetails,
  updateAdminImage,
} from '../../redux/actions/adminActions';

import blankProfilePic from '../../images/blankProfilePic.svg';
import useStyles from '../../styles/UpdateProfile';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

import { validator } from '../utils/helperFunctions';

const UpdateProfile = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();
  const admin = useSelector((store) => store.adminReducer.adminData);

  const [details, setDetails] = useState(admin);
  const [changes, setChanges] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState(null);

  // should contain only required fields
  const fieldsToCheck = ['name', 'dob', 'email', 'department'];

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    setChanges({ ...changes, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCancelUpload = () => {
    setChanges({ ...changes, avatar: '' });
    handleCloseModal();
  };

  const handleChangeDOB = (dob) => {
    setDetails({ ...details, dob });
    setChanges({ ...changes, dob });
    if (errors) {
      setErrors({ ...errors, dob: '' });
    }
  };

  const handleChangeImage = (e) => {
    let file = e.target.files[0];
    let fileSize = Math.round(file.size / 1024);
    if (file) {
      if (fileSize >= 1024) {
        // this alert will change with snackbar
        alert('File too Big, please select a file less than 1 MB');
        handleCancelUpload();
      } else {
        setChanges({ ...changes, avatar: file });
      }
    }
  };

  const handleUploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('newAvatar', changes.avatar);
    if (changes && Object.keys(changes).length !== 0) {
      dispatch(updateAdminImage(formData));
    }
    handleCloseModal();
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (changes && Object.keys(changes).length !== 0) {
  //     dispatch(updateAdminDetails(changes));
  //     setChanges({});
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if flag is true means there is no error in form and
    // if there is any error then flag will contain errors object
    const infoToCheck = { ...details, ...changes };
    const flag = validator(infoToCheck, fieldsToCheck);
    if (flag === true) {
      setErrors(null);
      if (changes && Object.keys(changes).length !== 0) {
        dispatch(updateAdminDetails(changes));
        setChanges({});
      }
    } else {
      setErrors(flag);
    }
  };

  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h5' className={classes.heading}>
        Edit Personal Information
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={3} className={classes.avatarGrid}>
          <div>
            {details.avatar ? (
              <Avatar
                src={`http://localhost:5000/uploads/${details.avatar}`}
                alt='profile-pic'
                className={classes.avatar}
              />
            ) : (
              <Avatar
                src={blankProfilePic}
                alt='profile-pic'
                className={classes.avatar}
              />
            )}
            <EditIcon onClick={handleOpenModal} className={classes.editIcon} />
          </div>
          <Modal open={openModal} onClose={handleCloseModal}>
            <form onSubmit={handleUploadImage} className={classes.modalForm}>
              <Typography variant='h5' className={classes.imageModalTitle}>
                Update Profile Picture
              </Typography>
              <input
                type='file'
                accept='image/*'
                onChange={handleChangeImage}
              />
              <div className={`${classes.rowWise} ${classes.buttonDiv}`}>
                <Button
                  type='submit'
                  variant='contained'
                  className={classes.filledButton}
                >
                  Upload
                </Button>
                <Button
                  variant='contained'
                  onClick={handleCancelUpload}
                  className={classes.outlinedButton}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Modal>
        </Grid>
        <Grid item xs={12} lg={9}>
          <form
            autoComplete='off'
            className={`${classes.root} ${classes.form70}`}
            onSubmit={handleSubmit}
          >
            <div className={classes.rowWise}>
              <TextField
                name='name'
                label='Name'
                margin='normal'
                value={details.name}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.name !== '',
                  helperText: errors.name,
                })}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                  <KeyboardDatePicker
                    name='dob'
                    size='small'
                    margin='normal'
                    label='Date of Birth'
                    format='dd-MM-yyyy'
                    value={details.dob}
                    onChange={handleChangeDOB}
                    className={classes.inputTextField}
                    {...(errors && {
                      error: errors.dob !== '',
                      helperText: errors.dob,
                    })}
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.rowWise}>
              <TextField
                select
                name='department'
                label='Department'
                margin='normal'
                value={details.department}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.department !== '',
                  helperText: errors.department,
                })}
              >
                <MenuItem value='CS'>CSE</MenuItem>
                <MenuItem value='IT'>IT</MenuItem>
                <MenuItem value='EC'>ECE</MenuItem>
                <MenuItem value='EE'>EEE</MenuItem>
                <MenuItem value='ME'>ME</MenuItem>
              </TextField>
              <TextField
                name='email'
                label='Email Address'
                margin='normal'
                value={details.email}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.email !== '',
                  helperText: errors.email,
                })}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                name='contactNumber'
                label='Contact Number'
                margin='normal'
                value={details.contactNumber}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.contactNumber !== '',
                  helperText: errors.contactNumber,
                })}
              />
            </div>
            <Button
              type='submit'
              variant='contained'
              className={`${classes.filledButton} ${classes.submitButton}`}
              disabled={changes && Object.keys(changes).length === 0}
            >
              Save Changes
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProfile;
