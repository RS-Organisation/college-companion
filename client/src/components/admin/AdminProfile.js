import React, { Fragment, useState, useEffect } from 'react';

import Header from './Header';
import DetailsComponent from './DetailsComponent';
import UpdatePassword from './UpdatePassword';
import useStyles from '../../styles/AdminProfile';

const AdminProfile = (props) => {
  const classes = useStyles();
  const selected = props?.location?.aboutProps?.selected || 'profile';
  const [clickedButton, setClickedButton] = useState(selected);
  useEffect(() => {
    setClickedButton(selected);
  }, [selected]);
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
          {clickedButton === 'profile' ? (
            <DetailsComponent />
          ) : (
            <UpdatePassword />
          )}
        </div>
      </Fragment>
    </Header>
  );
};

export default AdminProfile;
