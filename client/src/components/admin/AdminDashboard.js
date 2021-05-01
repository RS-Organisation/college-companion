import React from 'react';

import useStyles from '../../styles/Dashboard';
import Header from './Header';
import ProfileDetails from './ProfileDetails';

const AdminDashboard = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.main}>
        <ProfileDetails />
      </div>
    </Header>
  );
};

export default AdminDashboard;
