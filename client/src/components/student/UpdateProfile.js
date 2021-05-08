import 'date-fns';
import React, { useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
  MenuItem,
  Modal,
} from '@material-ui/core';
//for the functionality to upload files
import FileBase from 'react-file-base64';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyles from '../../styles/UpdateProfile';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

const initialData = {
  name: 'Atul Kumar',
  gender: 'M',
  dob: new Date('2014-08-18T21:11:54'),
  department: 'IT',
  section: '2',
  avatar: '',
  email: 'atul123@gmail.com',
  contactNumber: '8285754512',
  aadharCardNumber: '78456545781232',
  fatherName: 'Dinesh Kumar',
  fatherContactNumber: '9878536210',
};

const UpdateProfile = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const [details, setDetails] = useState(initialData);
  const [openModal, setOpenModal] = useState(false);

  const handleUploadImage = (e) => {
    e.preventDefault();
    console.log(details);
    handleCloseModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleChangeDOB = (dob) => {
    setDetails({ ...details, dob });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h5' className={classes.heading}>
        Personal Information
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={3} className={classes.avatarGrid}>
          {details.avatar ? (
            <Avatar
              src={details.avatar}
              alt='profile-pic'
              className={classes.avatar}
            />
          ) : (
            <Avatar alt='profile-pic' className={classes.avatar}>
              A
            </Avatar>
          )}
          <EditIcon onClick={handleOpenModal} className={classes.editIcon} />
          <Modal open={openModal} onClose={handleCloseModal}>
            <form onSubmit={handleUploadImage} className={classes.modalForm}>
              <Typography variant='h5' className={classes.imageModalTitle}>
                Choose Image
              </Typography>
              <FileBase
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setDetails({ ...details, avatar: base64 })
                }
              />
              <div className={`${classes.rowWise} ${classes.buttonDiv}`}>
                <Button type='submit' className={classes.filledButton}>
                  Upload
                </Button>
                <Button
                  onClick={handleCloseModal}
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
                    format='dd/MM/yyyy'
                    value={details.dob}
                    onChange={handleChangeDOB}
                    className={classes.inputTextField}
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
              />
              <TextField
                name='aadharCardNumber'
                label='Aadhar Card Number'
                margin='normal'
                value={details.aadharCardNumber}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
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
              />
              <TextField
                name='fatherContactNumber'
                label="Father's Contact Number"
                margin='normal'
                value={details.fatherContactNumber}
                onChange={handleChangeDetails}
                className={classes.inputTextField}
              />
            </div>
            <Button
              type='submit'
              variant='contained'
              className={`${classes.filledButton} ${classes.submitButton}`}
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
