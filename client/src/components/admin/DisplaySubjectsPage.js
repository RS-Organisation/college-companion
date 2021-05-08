import React, { useState } from 'react';
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
import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

const DisplaySubjectsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleDepartmentChange = (event) => {
    setClicked(false);
    setDepartment(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setClicked(false);
    setSemester(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);
  };

  return (
    <Header>
      <div className={clicked ? classes.container95 : classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          Subjects
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          justify={!clicked ? 'center' : 'flex-start'}
          alignItems={!clicked ? 'center' : 'stretch'}
        >
          <Grid item xs={12} lg={3}>
            <form
              className={clicked ? classes.form60 : classes.form100}
              onSubmit={handleSubmit}
            >
              <FormControl variant="outlined" size="small" className={classes.root}>
                <InputLabel>Department</InputLabel>
                <Select
                  value={department}
                  onChange={handleDepartmentChange}
                  label="Department"
                >
                  <MenuItem value={'CSE'}>CSE</MenuItem>
                  <MenuItem value={'IT'}>IT</MenuItem>
                  <MenuItem value={'ECE'}>ECE</MenuItem>
                  <MenuItem value={'EEE'}>EEE</MenuItem>
                  <MenuItem value={'ME'}>ME</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" size="small" className={classes.root}>
                <InputLabel>Semester</InputLabel>
                <Select
                  value={semester}
                  onChange={handleSemesterChange}
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
          {clicked && (
            <Grid item xs={12} lg={9}>
              <SubjectDetailTable />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default DisplaySubjectsPage;
