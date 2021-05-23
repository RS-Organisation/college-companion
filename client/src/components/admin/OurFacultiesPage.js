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
import FacultyDetailTable from './FacultyDetailTable';
import { getFaculties } from '../../redux/actions/adminActions';

import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

import { validator } from '../utils/helperFunctions';

const OurFacultiesPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const { allFaculties, facultiesDepartment } = useSelector(
    (store) => store.adminReducer
  );

  const [department, setDepartment] = useState(facultiesDepartment);
  const [errors, setErrors] = useState(null);

  // should contain only required fields
  const fieldsToCheck = ['department'];

  const handleChange = (event) => {
    setDepartment(event.target.value);
    setErrors(null);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(getFaculties({ department }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if flag is true means there is no error in form and
    // if there is any error then flag will contain errors object
    const flag = validator({ department }, fieldsToCheck);
    if (flag === true) {
      dispatch(getFaculties({ department }));
      setErrors(null);
    } else {
      setErrors(flag);
    }
  };

  const showFacultyTable = facultiesDepartment !== '';

  return (
    <Header>
      <div
        className={showFacultyTable ? classes.container95 : classes.container70}
      >
        <Typography variant='h4' className={classes.subtitle}>
          Our Faculties
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          justify={!showFacultyTable ? 'center' : 'flex-start'}
          alignItems={!showFacultyTable ? 'center' : 'stretch'}
        >
          <Grid item xs={12} lg={3}>
            <form
              className={showFacultyTable ? classes.form60 : classes.form100}
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
                  value={department}
                  onChange={handleChange}
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
              <Button
                variant='contained'
                type='submit'
                className={classes.filledButton}
              >
                Submit
              </Button>
            </form>
          </Grid>
          {showFacultyTable && (
            <Grid item xs={12} lg={9}>
              <FacultyDetailTable faculties={allFaculties} />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default OurFacultiesPage;
