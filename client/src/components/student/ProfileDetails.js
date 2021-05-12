import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Divider,
} from '@material-ui/core';
import useStyles from '../../styles/ProfileDetails';
import useStylesCommon from '../../styles/CommonStyles';
import blankProfilePic from '../../images/blankProfilePic.svg';

const ProfileDetails = (props) => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const { student } = props;

  const [details, setDetails] = useState(student);

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

    const checkGender = () => {
      if (details.gender) {
        if (details.gender === 'F')
          setDetails({ ...details, gender: 'Female' });
        if (details.gender === 'M') setDetails({ ...details, gender: 'Male' });
        if (details.gender === 'O')
          setDetails({ ...details, gender: 'Others' });
      }
    };
    checkDepartment();
    checkGender();
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
              src={details.avatar}
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
                label='Enrollment Number'
                margin='normal'
                value={details.enrollmentNumber}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value={
                  details.department ? details.department : 'Not Available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Section'
                margin='normal'
                value={details.section}
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
                label='Gender'
                margin='normal'
                value={details.gender}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Email Address'
                margin='normal'
                value={details.email}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
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
            <div className={classes.rowWise}>
              <TextField
                label='Joining Year'
                margin='normal'
                value={details.joiningYear}
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Aadhar Card Number'
                margin='normal'
                value={
                  details.aadharCardNumber
                    ? details.aadharCardNumber
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
                  details.fatherName ? details.fatherName : 'Not available'
                }
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label="Father's Contact Number"
                margin='normal'
                value={
                  details.fatherNumber ? details.fatherNumber : 'Not available'
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
