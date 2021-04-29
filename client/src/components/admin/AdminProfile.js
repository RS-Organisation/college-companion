import React, { Fragment, useState } from 'react';

import Header from './Header';
import DetailsComponent from './DetailsComponent';
import useStyles from '../../styles/AdminProfile';

import { Divider, Typography } from '@material-ui/core';

const AdminProfile = () => {
  const classes = useStyles();
  const [clickedButton, setClickedButton] = useState('profile');
  return (
    <Header>
      <Fragment>
        <div className={classes.titleDiv}>
          <p className={classes.title}>My account</p>
        </div>
        <div className={classes.header}>
          <span
            className={`${classes.span} ${
              clickedButton === 'profile' && classes.clickedButton
            }`}
            onClick={() => setClickedButton('profile')}
          >
            Profile
          </span>
          <span
            className={`${classes.span} ${
              clickedButton === 'security' && classes.clickedButton
            }`}
            onClick={() => setClickedButton('security')}
          >
            Security
          </span>
        </div>
        <div>
          {clickedButton === 'profile' ? <DetailsComponent /> : <p>Security</p>}
        </div>
      </Fragment>
    </Header>
  );
};

export default AdminProfile;
