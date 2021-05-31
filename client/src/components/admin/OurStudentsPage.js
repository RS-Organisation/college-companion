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
import { validator } from '../utils/helperFunctions';
import { departments, years } from '../utils/defaultValues';

import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

const OurStudentsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const dispatch = useDispatch();

  const { 
    allStudents, 
    studentsDepartment, 
    studentsYear 
  } = useSelector((store) => store.adminReducer);

  const [details, setDetails] = useState({
    department: studentsDepartment,
    year: studentsYear,
  });

  const [errors, setErrors] = useState(null);

  const requiredFields = ['department', 'year'];

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
      dispatch(getStudents(details));
      setErrors(null);
    } else {
      setErrors(flag);
    }
  };

  const showStudentTable = studentsDepartment !== '' && studentsYear !== '';

  return (
    <Header>
      <div className={showStudentTable ? classes.container95 : classes.container70}>
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
                  {Object.entries(departments).map(([key, value]) => (
                    <MenuItem value={key}>{value}</MenuItem>
                  ))}
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
                  {years.map(year => (
                    <MenuItem value={year}>{year}</MenuItem>
                  ))}
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
