import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider
} from '@material-ui/core';

import Header from './Header';
import SubjectDetailTable from './SubjectDetailTable';
import { getSubjects } from '../../redux/actions/adminActions';

import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

const DisplaySubjectsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };

  const dispatch = useDispatch();

  const {
    allSubjects,
    subjectsDepartment,
    subjectsSemester
  } = useSelector((store) => store.adminReducer);

  const [details, setDetails] = useState({
    department: subjectsDepartment,
    semester: subjectsSemester
  });

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getSubjects(details));
  };

  const showSubjectTable = (subjectsDepartment !== '' && subjectsSemester !== '');

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
              <FormControl variant="outlined" size="small" className={classes.root}>
                <InputLabel>Department</InputLabel>
                <Select
                  name='department'
                  value={details.department}
                  onChange={handleChangeDetails}
                  label="Department"
                >
                  <MenuItem value={'CS'}>CSE</MenuItem>
                  <MenuItem value={'IT'}>IT</MenuItem>
                  <MenuItem value={'EC'}>ECE</MenuItem>
                  <MenuItem value={'EE'}>EEE</MenuItem>
                  <MenuItem value={'ME'}>ME</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" size="small" className={classes.root}>
                <InputLabel>Semester</InputLabel>
                <Select
                  name='semester'
                  value={details.semester}
                  onChange={handleChangeDetails}
                  label="Semester"
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                </Select>
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
