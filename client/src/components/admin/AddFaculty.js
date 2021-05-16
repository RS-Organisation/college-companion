import 'date-fns';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  TextField,
  Button,
  MenuItem,
  Divider,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';

import Header from './Header';
import { addFaculty } from '../../redux/actions/adminActions';

import useStyles from '../../styles/AddAdmin';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

const initialData = {
  name: '',
  gender: '',
  dob: null,
  department: '',
  designation: '',
  joiningYear: '',
  email: '',
  contactNumber: '',
  aadharCardNumber: '',
};

const AddFaculty = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const [details, setDetails] = useState(initialData);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const validator = () => {
    let temp = {};
    temp.name = details.name ? '' : 'Name is required';
    temp.dob = details.dob ? '' : 'Date of birth is required';
    temp.email = details.email ? '' : 'Email is required';
    temp.joiningYear = details.joiningYear ? '' : 'Joining year is required';
    temp.designation = details.designation ? '' : 'Designation is required';
    temp.department = details.department ? '' : 'Department is required';
    temp.contactNumber =
      details.contactNumber.length === 0 ||
      /^[6-9]\d{9}$/.test(details.contactNumber)
        ? ''
        : 'Invalid contact number (numbers only)';
    temp.aadharCardNumber =
      details.aadharCardNumber.length === 0 ||
      /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(
        details.aadharCardNumber
      )
        ? ''
        : 'Invalid aadhar number (12-digits)';

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x === '' || x === null);
  };

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleChangeDOB = (dob) => {
    setDetails({ ...details, dob });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(addFaculty(details));
  //   setDetails(initialData);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator()) {
      dispatch(addFaculty(details));
      setDetails(initialData);
    }
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h5' className={classes.subtitle}>
          Add Faculty
        </Typography>
        <Divider />
        <form
          autoComplete='off'
          className={`${classes.root} ${classes.form50}`}
          onSubmit={handleSubmit}
        >
          <div className={classes.rowWise}>
            <TextField
              name='name'
              label='Name'
              variant='outlined'
              size='small'
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
              variant='outlined'
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <ThemeProvider theme={materialTheme}>
                <KeyboardDatePicker
                  name='dob'
                  size='small'
                  margin='normal'
                  label='Date of Birth'
                  inputVariant='outlined'
                  format='dd-MM-yyyy'
                  value={details.dob}
                  onChange={handleChangeDOB}
                  className={classes.inputTextField}
                />
              </ThemeProvider>
            </MuiPickersUtilsProvider>
            <TextField
              name='joiningYear'
              label='Joining Year'
              variant='outlined'
              size='small'
              margin='normal'
              value={details.joiningYear}
              onChange={handleChangeDetails}
              className={classes.inputTextField}
              {...(errors && {
                error: errors.joiningYear !== '',
                helperText: errors.joiningYear,
              })}
            />
          </div>
          <div className={classes.rowWise}>
            <TextField
              select
              name='department'
              label='Department'
              variant='outlined'
              size='small'
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
              name='designation'
              label='Designation'
              variant='outlined'
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
              <MenuItem value={'Assistant Professor'}>
                Assistant Professor
              </MenuItem>
              <MenuItem value={'Associate Professor'}>
                Associate Professor
              </MenuItem>
              <MenuItem value={'Professor'}>Professor</MenuItem>
              <MenuItem value={'HOD'}>HOD</MenuItem>
            </TextField>
          </div>
          <div className={classes.rowWise}>
            <TextField
              type='email'
              name='email'
              label='Email'
              variant='outlined'
              size='small'
              margin='normal'
              value={details.email}
              onChange={handleChangeDetails}
              className={classes.inputTextField}
              {...(errors && {
                error: errors.email !== '',
                helperText: errors.email,
              })}
            />
            <TextField
              type='tel'
              name='contactNumber'
              label='Contact Number'
              variant='outlined'
              size='small'
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
          <div className={classes.rowWise}>
            <TextField
              name='aadharCardNumber'
              label='Aadhar Card Number'
              variant='outlined'
              size='small'
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
            variant='contained'
            type='submit'
            className={`${classes.filledButton} ${classes.submitButton}`}
          >
            ADD
          </Button>
        </form>
      </div>
    </Header>
  );
};

export default AddFaculty;
