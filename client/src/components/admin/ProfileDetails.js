import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Divider,
} from '@material-ui/core';

import blankProfilePic from '../../images/blankProfilePic.svg';
import useStyles from '../../styles/ProfileDetails';
import useStylesCommon from '../../styles/CommonStyles';

const ProfileDetails = (props) => {
  const { admin } = props;

  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const [details, setDetails] = useState(admin);

  useEffect(() => {
    const checkDepartment = () => {
      if (details.department) {
        if (details.department === 'CS')
          setDetails({ ...details, department: 'CSE' });
        if (details.department === 'EC')
          setDetails({ ...details, department: 'ECE' });
        if (details.department === 'EE')
          setDetails({ ...details, department: 'EEE' });
      }
    };
    checkDepartment();
  }, [details]);

  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h4' className={classes.subtitle}>
        Personal Information
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} className={classes.avatarGrid}>
          {details.avatar ? (
            <Avatar
              src={`http://localhost:5000/uploads/${details.avatar}`}
              alt='profile-pic'
              className={classes.avatar}
            />
          ) : (
            <Avatar
              src={blankProfilePic}
              alt='profile-pic'
              className={classes.avatar}
            />
          )}
        </Grid>
        <Grid item xs={12} lg={8}>
          <form className={`${classes.root} ${classes.form90}`}>
            <div className={classes.rowWise}>
              <TextField
                label='Name'
                margin='normal'
                value={details.name}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Registration Number'
                margin='normal'
                value={details.registrationNumber}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value={
                  details.department ? details.department : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Joining Year'
                margin='normal'
                value={details.joiningYear}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value={details.dob}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Email Address'
                margin='normal'
                value={details.email}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Contact Number'
                margin='normal'
                value={
                  details.contactNumber
                    ? details.contactNumber
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileDetails;
