import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import ProfileDetails from './ProfileDetails';

import useStyles from '../../styles/CommonStyles';

const AdminDashboard = () => {
  const classes = useStyles();
  const admin = useSelector((store) => store.adminReducer.adminData);
  return (
    <Header>
      <div className={classes.container70}>
        <ProfileDetails admin={admin} />
      </div>
    </Header>
  );
};

export default AdminDashboard;
