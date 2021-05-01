import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import Header from './Header';
import useStyles from '../../styles/AddAdmin';

const AddSubject = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.formContainer}>
        <Typography variant='h5' className={classes.subtitle}>
          Add Subject
        </Typography>
        <form autoComplete="off" className={`${classes.root} ${classes.form}`}>
          <TextField
            label='Subject Name'
            variant='outlined'
            size='small'
            margin='normal'
          />
          <TextField
            label='Subject Code'
            variant='outlined'
            size='small'
            margin='normal'
          />
          <TextField
            label='Total Lectures'
            variant='outlined'
            size='small'
            margin='normal'
          />
          <TextField
            label='Department'
            variant='outlined'
            size='small'
            margin='normal'
          />
          <TextField
            label='Semester'
            variant='outlined'
            size='small'
            margin='normal'
          />
          <Button type='submit' className={classes.filledButton}>
            ADD
          </Button>
        </form>
      </div>
    </Header>
  );
};

export default AddSubject;
