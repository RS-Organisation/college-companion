import React from 'react';

import useStyles from '../../styles/StudentDashboard';
import Header from './Header';

const StudentDashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header>
        <p>This is student dashboard.</p>
      </Header>
    </div>
  );
};

export default StudentDashboard;
