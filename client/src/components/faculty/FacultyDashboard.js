import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import ProfileDetails from './ProfileDetails';
import useStyles from '../../styles/CommonStyles';

const FacultyDashboard = () => {
  const classes = useStyles();
  const faculty = useSelector((store) => store.facultyReducer.facultyData);
  return (
    <Header>
      <div className={classes.container70}>
        <ProfileDetails faculty={faculty} />
      </div>
    </Header>
  );
};

export default FacultyDashboard;
