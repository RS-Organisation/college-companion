import React from 'react';
import Header from './Header';
import ProfileDetails from './ProfileDetails';
import useStyles from '../../styles/CommonStyles';

const StudentDashboard = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.container70}>
        <ProfileDetails />
      </div>
    </Header>
  );
};

export default StudentDashboard;
