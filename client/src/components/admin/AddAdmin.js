import 'date-fns';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, TextField, Button, MenuItem, Divider } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Header from './Header';
import useStyles from '../../styles/AddAdmin';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';
import { addAdmin } from '../../redux/actions/adminActions';

const initialData = {
  name: '',
  dob: null,
  department: '',
  joiningYear: '',
  email: '',
  contactNumber: ''
};

const AddAdmin = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };
  const [details, setDetails] = useState(initialData);
  const dispatch = useDispatch();

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleChangeDOB = (dob) => {
    setDetails({ ...details, dob });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAdmin(details));
    setDetails(initialData);
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h5' className={classes.subtitle}>
          Add Admin
        </Typography>
        <Divider />
        <form
          autoComplete="off"
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
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <ThemeProvider theme={materialTheme}>
                <KeyboardDatePicker
                  name='dob'
                  size="small"
                  margin="normal"
                  label="Date of Birth"
                  inputVariant="outlined"
                  format="dd-MM-yyyy"
                  value={details.dob}
                  onChange={handleChangeDOB}
                  className={classes.inputTextField}
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
            >
              <MenuItem value={'CS'}>CSE</MenuItem>
              <MenuItem value={'IT'}>IT</MenuItem>
              <MenuItem value={'EC'}>ECE</MenuItem>
              <MenuItem value={'EE'}>EEE</MenuItem>
              <MenuItem value={'ME'}>ME</MenuItem>
            </TextField>
            <TextField
              name='joiningYear'
              label='Joining Year'
              variant='outlined'
              size='small'
              margin='normal'
              value={details.joiningYear}
              onChange={handleChangeDetails}
              className={classes.inputTextField}
            />
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
    </Header >
  );
};

export default AddAdmin;
