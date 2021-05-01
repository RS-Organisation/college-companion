import React from 'react';

import useStyles from '../../styles/Dashboard';
import Header from './Header';
import ProfileDetails from './ProfileDetails';

const StudentDashboard = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.main}>
        <ProfileDetails />
      </div>
    </Header>
  );
};

export default StudentDashboard;
