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
import { addStudent } from '../../redux/actions/adminActions';
import { validator } from '../utils/helperFunctions';
import { departments, genders, sections } from '../utils/defaultValues';

import useStyles from '../../styles/AddAdmin';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

const initialData = {
  name: '',
  gender: '',
  dob: null,
  department: '',
  section: '',
  joiningYear: '',
  email: '',
  contactNumber: '',
  fatherName: '',
  fatherContactNumber: '',
  aadharCardNumber: '',
};

const AddStudent = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const [details, setDetails] = useState(initialData);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const requiredFields = [
    'name',
    'dob',
    'email',
    'joiningYear',
    'department',
    'section',
    'fatherName',
  ];

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleChangeDOB = (dob) => {
    setDetails({ ...details, dob });
    if (errors) {
      setErrors({ ...errors, dob: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flag = validator(details, requiredFields);
    if (flag === true) {
      dispatch(addStudent(details)).then(() => {
        setDetails(initialData);
        setErrors(null);
      });
    } else {
      setErrors(flag);
    }
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h5' className={classes.subtitle}>
          Add Student
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
              {Object.entries(genders).map(([key, value]) => (
                <MenuItem value={key}>{value}</MenuItem>
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
                  inputVariant='outlined'
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
              type='number'
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
              {Object.entries(departments).map(([key, value]) => (
                <MenuItem value={key}>{value}</MenuItem>
              ))}
            </TextField>
            <TextField
              select
              name='section'
              label='Section'
              variant='outlined'
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
              {sections.map(section => (
                <MenuItem value={section}>{section}</MenuItem>
              ))}
            </TextField>
          </div>
          <div className={classes.rowWise}>
            <TextField
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
              name='fatherName'
              label="Father's Name"
              variant='outlined'
              size='small'
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
              type='tel'
              name='fatherContactNumber'
              label="Father's Contact Number"
              variant='outlined'
              size='small'
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

export default AddStudent;
