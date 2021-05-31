import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
} from '@material-ui/core';

import Header from './Header';
import { addSubject } from '../../redux/actions/adminActions';
import { validator } from '../utils/helperFunctions';
import { departments, semesters } from '../utils/defaultValues';

import useStyles from '../../styles/AddAdmin';
import useStylesCommon from '../../styles/CommonStyles';

const initialData = {
  subjectName: '',
  subjectCode: '',
  totalLectures: '',
  department: '',
  semester: '',
};

const AddSubject = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const [details, setDetails] = useState(initialData);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  const requiredFields = [
    'subjectName',
    'subjectCode',
    'department',
    'semester',
  ];

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const flag = validator(details, requiredFields);
    if (flag === true) {
      dispatch(addSubject(details)).then(() => {
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
          Add Subject
        </Typography>
        <Divider />
        <form
          autoComplete='off'
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
            {...(errors && {
              error: errors.subjectName !== '',
              helperText: errors.subjectName,
            })}
          />
          <TextField
            name='subjectCode'
            label='Subject Code'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.subjectCode}
            onChange={handleChangeDetails}
            {...(errors && {
              error: errors.subjectCode !== '',
              helperText: errors.subjectCode,
            })}
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
            name='semester'
            label='Semester'
            variant='outlined'
            size='small'
            margin='normal'
            value={details.semester}
            onChange={handleChangeDetails}
            {...(errors && {
              error: errors.semester !== '',
              helperText: errors.semester,
            })}
          >
            {semesters.map(semester => (
              <MenuItem value={semester}>{semester}</MenuItem>
            ))}
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
