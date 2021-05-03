import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import Header from './Header';
import AttendanceTable from './AttendanceTable';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '70%',
    margin: 'auto',
  },
  subtitle: {
    margin: '0.7rem auto',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
}));

const AttendancePage = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.container}>
        <Typography variant='h4' className={classes.subtitle}>
          Your Attendance
        </Typography>
        <Divider />
        <AttendanceTable />
      </div>
    </Header>
  );
};

export default AttendancePage;
