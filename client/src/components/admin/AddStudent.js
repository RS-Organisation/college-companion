import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import Header from './Header';
import useStyles from '../../styles/AddAdmin';

const AddStudent = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.formContainer}>
        <Typography variant='h5' className={classes.subtitle}>
          Add Student
        </Typography>
        <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
          <div className={classes.rowWise}>
            <TextField
              label='Student Name'
              variant='outlined'
              size='small'
              margin='normal'
            />
            <TextField
              label='Gender'
              variant='outlined'
              size='small'
              margin='normal'
            />
          </div>
          <div className={classes.rowWise}>
            <TextField
              label='Date of Birth'
              variant='outlined'
              size='small'
              margin='normal'
            />
            <TextField
              label='Joining Year'
              variant='outlined'
              size='small'
              margin='normal'
            />
          </div>
          <div className={classes.rowWise}>
            <TextField
              label='Department'
              variant='outlined'
              size='small'
              margin='normal'
            />
            <TextField
              label='Section'
              variant='outlined'
              size='small'
              margin='normal'
            />
          </div>
          <div className={classes.rowWise}>
            <TextField
              label='Email'
              variant='outlined'
              size='small'
              margin='normal'
            />
            <TextField
              label='Contact Number'
              variant='outlined'
              size='small'
              margin='normal'
            />
          </div>
          <div className={classes.rowWise}>
            <TextField
              label="Father's Name"
              variant='outlined'
              size='small'
              margin='normal'
            />
            <TextField
              label="Father's Contact Number"
              variant='outlined'
              size='small'
              margin='normal'
            />
          </div>
          <Button type='submit' className={classes.filledButton}>
            ADD
          </Button>
        </form>
      </div>
    </Header>
  );
};

export default AddStudent;
