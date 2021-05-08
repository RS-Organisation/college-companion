import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import Header from './Header';
import AttendanceTable from './AttendanceTable';
import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

const AttendancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };

  return (
    <Header>
      <div className={classes.container70}>
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
