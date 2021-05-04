import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import Header from './Header';
import AttendanceTable from './AttendanceTable';
import useStyles from '../../styles/MarkAttendancePage';

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
