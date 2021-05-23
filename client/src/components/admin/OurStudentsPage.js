import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';

import Header from './Header';
import StudentDetailTable from './StudentDetailTable';
import { getStudents } from '../../redux/actions/adminActions';

import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

import { validator } from '../utils/helperFunctions';

const OurStudentsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const { allStudents, studentsDepartment, studentsYear } = useSelector(
    (store) => store.adminReducer
  );

  const [details, setDetails] = useState({
    department: studentsDepartment,
    year: studentsYear,
  });

  const [errors, setErrors] = useState(null);

  // should contain only required fields
  const fieldsToCheck = ['department', 'year'];

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    setErrors({ ...errors, [name]: '' });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(getStudents(details));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if flag is true means there is no error in form and
    // if there is any error then flag will contain errors object
    const flag = validator(details, fieldsToCheck);
    if (flag === true) {
      dispatch(getStudents(details));
      setErrors(null);
    } else {
      setErrors(flag);
    }
  };

  const showStudentTable = studentsDepartment !== '' && studentsYear !== '';

  return (
    <Header>
      <div
        className={showStudentTable ? classes.container95 : classes.container70}
      >
        <Typography variant='h4' className={classes.subtitle}>
          Our Students
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          justify={!showStudentTable ? 'center' : 'flex-start'}
          alignItems={!showStudentTable ? 'center' : 'stretch'}
        >
          <Grid item xs={12} lg={3}>
            <form
              className={showStudentTable ? classes.form60 : classes.form100}
              onSubmit={handleSubmit}
            >
              <FormControl
                variant='outlined'
                size='small'
                className={classes.root}
                {...(errors && {
                  error: errors.department !== '',
                })}
              >
                <InputLabel>Department</InputLabel>
                <Select
                  name='department'
                  value={details.department}
                  onChange={handleChangeDetails}
                  label='Department'
                >
                  <MenuItem value={'CS'}>CSE</MenuItem>
                  <MenuItem value={'IT'}>IT</MenuItem>
                  <MenuItem value={'EC'}>ECE</MenuItem>
                  <MenuItem value={'EE'}>EEE</MenuItem>
                  <MenuItem value={'ME'}>ME</MenuItem>
                </Select>
                {errors && <FormHelperText>{errors.department}</FormHelperText>}
              </FormControl>
              <FormControl
                variant='outlined'
                size='small'
                className={classes.root}
                {...(errors && {
                  error: errors.year !== '',
                })}
              >
                <InputLabel>Year</InputLabel>
                <Select
                  name='year'
                  value={details.year}
                  onChange={handleChangeDetails}
                  label='Year'
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
                {errors && <FormHelperText>{errors.year}</FormHelperText>}
              </FormControl>
              <Button
                variant='contained'
                type='submit'
                className={classes.filledButton}
              >
                Search
              </Button>
            </form>
          </Grid>
          {showStudentTable && (
            <Grid item xs={12} lg={9}>
              <StudentDetailTable students={allStudents} />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default OurStudentsPage;
