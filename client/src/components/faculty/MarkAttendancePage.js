import React, { useState } from 'react';

import {
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

import useStyles from '../../styles/MarkAttendancePage';
import Header from './Header';
import MarkAttendanceTable from './MarkAttendanceTable';

const MarkAttendancePage = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [subjectCode, setSubjectCode] = useState('');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleChangeSubjectCode = (event) => {
    setSubjectCode(event.target.value);
  };

  return (
    <Header>
      <div className={classes.container}>
        <Typography variant='h4' className={classes.subtitle}>
          Mark Attendance
        </Typography>
        <Divider />
        {!clicked ? (
          <form className={classes.form}>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
            >
              <InputLabel>Department</InputLabel>
              <Select
                value={department}
                onChange={handleDepartmentChange}
                label='Department'
              >
                <MenuItem value={'CSE'}>CSE</MenuItem>
                <MenuItem value={'IT'}>IT</MenuItem>
                <MenuItem value={'ECE'}>ECE</MenuItem>
                <MenuItem value={'EEE'}>EEE</MenuItem>
                <MenuItem value={'ME'}>ME</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
            >
              <InputLabel>Section</InputLabel>
              <Select
                value={section}
                onChange={handleSectionChange}
                label='Section'
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
            >
              <InputLabel>Year</InputLabel>
              <Select value={year} onChange={handleYearChange} label='Year'>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
            <Button
              className={classes.filledButton}
              onClick={() => setClicked(true)}
            >
              Search
            </Button>
          </form>
        ) : (
          <div>
            <div className={classes.flexRow}>
              <FormControl
                variant='outlined'
                size='medium'
                className={`${classes.root} ${classes.subjectCode}`}
                margin='dense'
              >
                <InputLabel>Subject Code</InputLabel>
                <Select
                  value={subjectCode}
                  onChange={handleChangeSubjectCode}
                  label='Subject Code'
                >
                  <MenuItem value={'ETCS-144'}>ETCS-144</MenuItem>
                  <MenuItem value={'ETCS-206'}>ETCS-206</MenuItem>
                  <MenuItem value={'ETCS-208'}>ETCS-208</MenuItem>
                  <MenuItem value={'ETCS-216'}>ETCS-216</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                className={classes.filledButton}
                onClick={() => setClicked(false)}
              >
                Back
              </Button>
            </div>
            <MarkAttendanceTable />
            <div className={classes.buttonDiv}>
              <Button
                variant="contained"
                className={`${classes.filledButton} ${classes.submitButton}`}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default MarkAttendancePage;
