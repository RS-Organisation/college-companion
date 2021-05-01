import React from 'react';

import { Grid, Typography, TextField, Avatar, Button } from '@material-ui/core';

import useStyles from '../../styles/ProfileDetails';

const ProfileDetails = () => {
  const classes = useStyles();
  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h4' className={classes.subtitle}>
        Personal Information
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} className={classes.avatarGrid}>
          <Avatar alt='Remy Sharp' className={classes.avatar}>
            A
          </Avatar>
        </Grid>
        <Grid item xs={12} lg={8}>
          <form className={`${classes.root} ${classes.form}`}>
            <div className={classes.rowWise}>
              <TextField
                label='Name'
                margin='normal'
                value='Atul Kumar'
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Registration number'
                margin='normal'
                value='ADM2XXX0XX'
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value='CSE'
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Joining year'
                margin='normal'
                value='20XX'
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value='30-12-1997'
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Gender'
                margin='normal'
                value='Male'
                inputProps={{ readOnly: true }}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Email address'
                margin='normal'
                value='atulkumar@123.com'
                inputProps={{ readOnly: true }}
              />
              <TextField
                label='Contact number'
                margin='normal'
                value='8447088311'
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
