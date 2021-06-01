import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Divider,
} from '@material-ui/core';

import { departments, genders } from '../utils/defaultValues';

import blankProfilePic from '../../images/blankProfilePic.svg';
import useStyles from '../../styles/ProfileDetails';
import useStylesCommon from '../../styles/CommonStyles';

const ProfileDetails = (props) => {
  const { faculty } = props;

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
          {faculty.avatar ? (
            <Avatar
              src={`${process.env.REACT_APP_SERVER_URL}/uploads/${faculty.avatar}`}
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
                value={faculty.name}
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Registration Number'
                margin='normal'
                value={faculty.registrationNumber}
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value={
                  faculty.department
                    ? departments[faculty.department]
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Designation'
                margin='normal'
                value={faculty.designation}
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Gender'
                margin='normal'
                value={genders[faculty.gender]}
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Joining Year'
                margin='normal'
                value={faculty.joiningYear}
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Email Address'
                margin='normal'
                value={faculty.email}
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Contact Number'
                margin='normal'
                value={
                  faculty.contactNumber
                    ? faculty.contactNumber
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value={faculty.dob}
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Aadhar Card Number'
                margin='normal'
                value={
                  faculty.aadharCardNumber
                    ? faculty.aadharCardNumber
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
              />
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileDetails;
