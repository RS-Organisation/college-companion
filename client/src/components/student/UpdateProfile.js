import React from 'react';

import useStyles from '../../styles/UpdateProfile';

import { Grid, Typography, TextField, Avatar, Button } from '@material-ui/core';

const UpdateProfile = () => {
  const classes = useStyles();
  return (
    <div classsName={classes.contentBox}>
      <Typography variant='h5' className={classes.subtitle}>
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
                label='First Name'
                margin='normal'
                value='Shikhar'
              />
              <TextField
                label='Last Name'
                margin='normal'
                value='Rastogi'
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value='IT'
              />
              <TextField
                label='Section'
                margin='normal'
                value='2'
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value='20-05-1999'
              />
              <TextField
                label='Gender'
                margin='normal'
                value='Male'
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Email Address'
                margin='normal'
                value='shikhar@123.com'
              />
              <TextField
                label='Contact Number'
                margin='normal'
                value='8974545457'
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label="Father's Name"
                margin='normal'
                value='Mahesh Rastogi'
              />
              <TextField
                label="Father's Contact Number"
                margin='normal'
                value='8754214596'
              />
            </div>
            <Button type='submit' className={classes.filledButton}>
              Save Changes
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default UpdateProfile;
