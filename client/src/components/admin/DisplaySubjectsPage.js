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
import SubjectDetailTable from './SubjectDetailTable';
import { getSubjects } from '../../redux/actions/adminActions';
import { validator } from '../utils/helperFunctions';
import { departments, semesters } from '../utils/defaultValues';

import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

const DisplaySubjectsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const { 
    allSubjects, 
    subjectsDepartment, 
    subjectsSemester 
  } = useSelector((store) => store.adminReducer);

  const [details, setDetails] = useState({
    department: subjectsDepartment,
    semester: subjectsSemester,
  });

  const [errors, setErrors] = useState(null);

  const requiredFields = ['department', 'semester'];

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
      dispatch(getSubjects(details));
      setErrors(null);
    } else {
      setErrors(flag);
    }
  };

  const showSubjectTable = subjectsDepartment !== '' && subjectsSemester !== '';

  return (
    <Header>
      <div className={showSubjectTable ? classes.container95 : classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          Subjects
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          justify={!showSubjectTable ? 'center' : 'flex-start'}
          alignItems={!showSubjectTable ? 'center' : 'stretch'}
        >
          <Grid item xs={12} lg={3}>
            <form
              className={showSubjectTable ? classes.form60 : classes.form100}
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
                  error: errors.semester !== '',
                })}
              >
                <InputLabel>Semester</InputLabel>
                <Select
                  name='semester'
                  value={details.semester}
                  onChange={handleChangeDetails}
                  label='Semester'
                >
                  {semesters.map(semester => (
                    <MenuItem value={semester}>{semester}</MenuItem>
                  ))}
                </Select>
                {errors && <FormHelperText>{errors.semester}</FormHelperText>}
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
          {showSubjectTable && (
            <Grid item xs={12} lg={9}>
              <SubjectDetailTable subjects={allSubjects} />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default DisplaySubjectsPage;
