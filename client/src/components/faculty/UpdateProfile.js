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
import EditIcon from '@material-ui/icons/Edit';
import { ThemeProvider } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';

import {
  updateFacultyDetails,
  updateFacultyImage,
} from '../../redux/actions/facultyActions';
import { setSnackbar } from '../../redux/actions/snackbarActions';
import { validator } from '../utils/helperFunctions';
import { departments, genders, designations } from '../utils/defaultValues';

import blankProfilePic from '../../images/blankProfilePic.svg';
import useStyles from '../../styles/UpdateProfile';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

const UpdateProfile = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();
  const faculty = useSelector((store) => store.facultyReducer.facultyData);
  const date = faculty.dob.split('-');
  const genDob = new Date(`${date[2]}-${date[1]}-${date[0]}`);
  const [details, setDetails] = useState({ ...faculty, dob: genDob });
  const [changes, setChanges] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState(null);

  const requiredFields = ['name', 'dob', 'email', 'department', 'designation'];

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

  const handleCancel = () => {
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
        dispatch(setSnackbar({ 
          snackbarType: 'error', 
          snackbarMessage: 'File too big, please select a file less than 1 MB'
        }));
        handleCancel();
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
      dispatch(updateFacultyImage(formData));
    }
    handleCloseModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const infoToCheck = { ...details, ...changes };
    const flag = validator(infoToCheck, requiredFields);
    if (flag === true) {
      setErrors(null);
      if (changes && Object.keys(changes).length !== 0) {
        dispatch(updateFacultyDetails(changes));
        setChanges({});
      }
    } else {
      setErrors(flag);
    }
  };

  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h5' className={classes.heading}>
        Personal Information
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
                accept='image/png, image/jpg, image/jpeg'
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
                  onClick={handleCancel}
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
              <TextField
                select
                name='gender'
                label='Gender'
                size='small'
                margin='normal'
                value={details.gender}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
              >
                {Object.entries(genders).map(([key, value]) => (
                  <MenuItem value={key}>{value}</MenuItem>
                ))}
              </TextField>
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
                {Object.entries(departments).map(([key, value]) => (
                  <MenuItem value={key}>{value}</MenuItem>
                ))}
              </TextField>
              <TextField
                select
                name='designation'
                label='Designation'
                size='small'
                margin='normal'
                value={details.designation}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.designation !== '',
                  helperText: errors.designation,
                })}
              >
                {designations.map(designation => (
                  <MenuItem value={designation}>{designation}</MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.rowWise}>
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
                type='tel'
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
              <TextField
                name='aadharCardNumber'
                label='Aadhar Card Number'
                margin='normal'
                value={details.aadharCardNumber}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.aadharCardNumber !== '',
                  helperText: errors.aadharCardNumber,
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
