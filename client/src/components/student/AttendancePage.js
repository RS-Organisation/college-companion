import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Divider } from '@material-ui/core';

import Header from './Header';
import AttendanceTable from './AttendanceTable';
import LoadingPage from '../utils/LoadingPage';
import { getAttendance, getSubjects } from '../../redux/actions/studentActions';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

const AttendancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const { attendance, subjects } = useSelector((store) => store.studentReducer);

  useEffect(() => {
    if (attendance.length === 0 && subjects.length === 0) {
      dispatch(getAttendance());
      dispatch(getSubjects());
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }

  }, [dispatch, attendance.length, subjects.length, loading]);

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          Your Attendance
        </Typography>
        <Divider />
        {loading ? <LoadingPage /> : (
          <AttendanceTable
            attendance={attendance}
            subjects={subjects}
          />
        )}
      </div>
    </Header>
  );
};

export default AttendancePage;
