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
  updateStudentDetails,
  updateStudentImage,
} from '../../redux/actions/studentActions';

import blankProfilePic from '../../images/blankProfilePic.svg';
import useStyles from '../../styles/UpdateProfile';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

import { validator } from '../utils/helperFunctions';
import { setSnackbar } from '../../redux/actions/snackbarActions';

const UpdateProfile = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();
  const student = useSelector((store) => store.studentReducer.studentData);
  const date = student.dob.split('-');
  const genDob = new Date(`${date[2]}-${date[1]}-${date[0]}`);
  const [details, setDetails] = useState({ ...student, dob: genDob });
  const [changes, setChanges] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [errors, setErrors] = useState(null);

  // should contain only required fields
  const fieldsToCheck = [
    'name',
    'dob',
    'email',
    'department',
    'section',
    'fatherName',
  ];

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

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    setChanges({ ...changes, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
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
        alert('File too Big, please select a file less than 1 MB');
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
      dispatch(updateStudentImage(formData));
    }
    handleCloseModal();
  };

  // console.log(parseISO(details.dob));

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (changes && Object.keys(changes).length !== 0) {
  //     dispatch(updateStudentDetails(changes));
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
        dispatch(updateStudentDetails(changes));
        setChanges({});
      }
    } else {
      setErrors(flag);
    }
  };

  //remove this
  const testSnackbar = () => {
    dispatch(
      setSnackbar({
        snackbarType: 'success',
        snackbarMessage: 'Test Success',
      })
    );
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
                <MenuItem value={'M'}>Male</MenuItem>
                <MenuItem value={'F'}>Female</MenuItem>
                <MenuItem value={'O'}>Other</MenuItem>
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
                <MenuItem value={'CS'}>CSE</MenuItem>
                <MenuItem value={'IT'}>IT</MenuItem>
                <MenuItem value={'EC'}>ECE</MenuItem>
                <MenuItem value={'EE'}>EEE</MenuItem>
                <MenuItem value={'ME'}>ME</MenuItem>
              </TextField>
              <TextField
                select
                name='section'
                label='Section'
                size='small'
                margin='normal'
                value={details.section}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.section !== '',
                  helperText: errors.section,
                })}
              >
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
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
                    value={new Date(details.dob)}
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
            <div className={classes.rowWise}>
              <TextField
                name='fatherName'
                label="Father's Name"
                margin='normal'
                value={details.fatherName}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.fatherName !== '',
                  helperText: errors.fatherName,
                })}
              />
              <TextField
                name='fatherContactNumber'
                label="Father's Contact Number"
                margin='normal'
                value={details.fatherContactNumber}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
                {...(errors && {
                  error: errors.fatherContactNumber !== '',
                  helperText: errors.fatherContactNumber,
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
            {/*remove this*/}
            <Button type='submit' variant='contained' onClick={testSnackbar}>
              test
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProfile;
