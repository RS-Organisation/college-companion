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
import { addAdmin } from '../../redux/actions/adminActions';
import { validator } from '../utils/helperFunctions';
import { departments } from '../utils/defaultValues';

import SubmitLoader from '../utils/SubmitLoader';

import useStyles from '../../styles/AddAdmin';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

const initialData = {
  name: '',
  dob: null,
  department: '',
  joiningYear: '',
  email: '',
  contactNumber: '',
};

const AddAdmin = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const [details, setDetails] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const requiredFields = ['name', 'dob', 'email', 'joiningYear', 'department'];

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
      setLoading(true);
      dispatch(addAdmin(details)).then(() => {
        setLoading(false);
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
          Add Admin
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
          {loading ? (
            <SubmitLoader />
          ) : (
            <Button
              variant='contained'
              type='submit'
              className={`${classes.filledButton} ${classes.submitButton}`}
            >
              ADD
            </Button>
          )}
        </form>
      </div>
    </Header>
  );
};

export default AddAdmin;
