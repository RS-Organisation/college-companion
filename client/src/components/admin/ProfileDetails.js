import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Divider,
} from '@material-ui/core';

import { departments } from '../utils/defaultValues';

import blankProfilePic from '../../images/blankProfilePic.svg';
import useStyles from '../../styles/ProfileDetails';
import useStylesCommon from '../../styles/CommonStyles';

const ProfileDetails = (props) => {
  const { admin } = props;
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h4' className={classes.subtitle}>
        Personal Information
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} className={classes.avatarGrid}>
          {admin.avatar ? (
            <Avatar
              src={`${process.env.REACT_APP_SERVER_URL}/uploads/${admin.avatar}`}
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
                value={admin.name}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Registration Number'
                margin='normal'
                value={admin.registrationNumber}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value={
                  admin.department
                    ? departments[admin.department]
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Joining Year'
                margin='normal'
                value={admin.joiningYear}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value={admin.dob}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Email Address'
                margin='normal'
                value={admin.email}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Contact Number'
                margin='normal'
                value={
                  admin.contactNumber ? admin.contactNumber : 'Not available'
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
