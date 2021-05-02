import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import Header from './Header';
import SubjectDetailTable from './SubjectDetailTable';
import useStyles from '../../styles/OurFacultiesPage';

const DisplaySubjectsPage = () => {
  const classes = useStyles();
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  return (
    <Header>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={4}>
            <form className={classes.form}>
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
              <Button className={classes.filledButton}>
                Search
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} lg={8}>
            {true && <SubjectDetailTable />}
          </Grid>
        </Grid>
      </div>
    </Header>
  );
};

export default DisplaySubjectsPage;
