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
  const { student } = props;

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
          {student.avatar ? (
            <Avatar
              src={`${process.env.REACT_APP_SERVER_URL}/uploads/${student.avatar}`}
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
                value={student.name}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Enrollment Number'
                margin='normal'
                value={student.enrollmentNumber}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value={
                  student.department
                    ? departments[student.department]
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Section'
                margin='normal'
                value={student.section}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value={student.dob}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Gender'
                margin='normal'
                value={genders[student.gender]}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Email Address'
                margin='normal'
                value={student.email}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Contact Number'
                margin='normal'
                value={
                  student.contactNumber
                    ? student.contactNumber
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Joining Year'
                margin='normal'
                value={student.joiningYear}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Aadhar Card Number'
                margin='normal'
                value={
                  student.aadharCardNumber
                    ? student.aadharCardNumber
                    : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label="Father's Name"
                margin='normal'
                value={
                  student.fatherName ? student.fatherName : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label="Father's Contact Number"
                margin='normal'
                value={
                  student.fatherNumber ? student.fatherNumber : 'Not available'
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
