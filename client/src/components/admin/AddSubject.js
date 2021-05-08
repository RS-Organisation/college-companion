import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem
} from '@material-ui/core';
import Header from './Header';
import useStyles from '../../styles/AddAdmin';
import useStylesCommon from '../../styles/CommonStyles';

const initialData = {
  subjectName: '',
  subjectCode: '',
  totalLectures: '',
  department: '',
  semester: ''
};

const AddSubject = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };
  const [details, setDetails] = useState(initialData);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h5' className={classes.subtitle}>
          Add Subject
        </Typography>
        <Divider />
        <form
          autoComplete="off"
          className={`${classes.root} ${classes.form50}`}
          onSubmit={handleSubmit}
        >
          <TextField
            name='subjectName'
            label='Subject Name'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.subjectName}
            onChange={handleChangeDetails}
          />
          <TextField
            name='subjectCode'
            label='Subject Code'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.subjectCode}
            onChange={handleChangeDetails}
          />
          <TextField
            type='number'
            name='totalLectures'
            label='Total Lectures'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.totalLectures}
            onChange={handleChangeDetails}
          />
          <TextField
            select
            name='department'
            label='Department'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.department}
            onChange={handleChangeDetails}
          >
            <MenuItem value={'CS'}>CSE</MenuItem>
            <MenuItem value={'IT'}>IT</MenuItem>
            <MenuItem value={'EC'}>ECE</MenuItem>
            <MenuItem value={'EE'}>EEE</MenuItem>
            <MenuItem value={'ME'}>ME</MenuItem>
          </TextField>
          <TextField
            select
            name='semester'
            label='Semester'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.semester}
            onChange={handleChangeDetails}
          >
            <MenuItem value={'1'}>1</MenuItem>
            <MenuItem value={'2'}>2</MenuItem>
            <MenuItem value={'3'}>3</MenuItem>
            <MenuItem value={'4'}>4</MenuItem>
            <MenuItem value={'5'}>5</MenuItem>
            <MenuItem value={'6'}>6</MenuItem>
            <MenuItem value={'7'}>7</MenuItem>
            <MenuItem value={'8'}>8</MenuItem>
          </TextField>
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

export default AddSubject;
