import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Divider } from '@material-ui/core';

import Header from './Header';
import AttendanceTable from './AttendanceTable';
import { getAttendanceData } from '../../redux/actions/studentActions';

import SubmitLoader from '../utils/SubmitLoader';

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
      dispatch(getAttendanceData());
    } else {
      setLoading(false);
    }
  }, [dispatch, attendance, subjects]);

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          Your Attendance
        </Typography>
        <Divider />
        {loading ? (
          <div style={{ marginTop: '4rem' }}>
            <SubmitLoader />
          </div>
        ) : (
          <AttendanceTable attendance={attendance} subjects={subjects} />
        )}
      </div>
    </Header>
  );
};

export default AttendancePage;
