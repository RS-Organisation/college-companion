import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
// } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';
import Header from './Header';

const StudentDashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header>
        <p>My name is Shikhar Rastogi</p>
      </Header>
    </div>
  );
};

export default StudentDashboard;
