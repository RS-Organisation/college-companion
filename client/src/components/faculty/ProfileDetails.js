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

const ProfileDetails = (props) => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const { faculty } = props;

  const [details, setDetails] = useState(faculty);

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
          <Avatar alt='Remy Sharp' className={classes.avatar}>
            A
          </Avatar>
        </Grid>
        <Grid item xs={12} lg={8}>
          <form className={`${classes.root} ${classes.form90}`}>
            <div className={classes.rowWise}>
              <TextField
                label='Name'
                margin='normal'
                value={details.name}
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Registration Number'
                margin='normal'
                value={details.registrationNumber}
                inputProps={{ readOnly: true }}
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
              />
              <TextField
                label='Designation'
                margin='normal'
                value={details.designation}
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Gender'
                margin='normal'
                value={details.gender}
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Joining Year'
                margin='normal'
                value={details.joiningYear}
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Email Address'
                margin='normal'
                value={details.email}
                inputProps={{ readOnly: true }}
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
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value={details.dob}
                inputProps={{ readOnly: true }}
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
              />
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileDetails;
