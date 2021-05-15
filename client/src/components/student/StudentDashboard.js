import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import ProfileDetails from './ProfileDetails';

import useStyles from '../../styles/CommonStyles';

const StudentDashboard = () => {
  const classes = useStyles();
  const student = useSelector((store) => store.studentReducer.studentData);
  return (
    <Header>
      <div className={classes.container70}>
        <ProfileDetails student={student} />
      </div>
    </Header>
  );
};

export default StudentDashboard;
