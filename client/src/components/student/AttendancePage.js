import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Divider } from '@material-ui/core';
import Header from './Header';
import AttendanceTable from './AttendanceTable';
import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';
import { getAttendance } from '../../redux/actions/studentActions';

const AttendancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAttendance());
  }, [dispatch]);

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
