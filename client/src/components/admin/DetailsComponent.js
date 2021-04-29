import React from 'react';

import useStyles from '../../styles/DetailsComponent';

import { Grid, Typography, TextField, Avatar } from '@material-ui/core';

const DetailsComponent = () => {
  const classes = useStyles();
  return (
    <div classsName={classes.contentBox}>
      <Grid container spacing={0}>
        <Grid item xs={12} lg={4} className={classes.avatarGrid}>
          <Avatar alt='Remy Sharp' className={classes.avatar}>
            A
          </Avatar>
        </Grid>
        <Grid item xs={12} lg={8} className=''>
          <div>
            <Typography variant='h6' className={classes.subtitle}>
              Personal Information
            </Typography>
            <div>
              <form className={`${classes.root} ${classes.form}`}>
                <div className={classes.rowWise}>
                  <TextField
                    label='First name'
                    margin='normal'
                    defaultValue='adminFirstName'
                  />
                  <TextField
                    label='Last name'
                    margin='normal'
                    defaultValue='adminLastName'
                  />
                </div>
                <div className={classes.rowWise}>
                  <TextField
                    label='Designation'
                    margin='normal'
                    defaultValue='adminDesignation'
                  />
                  <TextField
                    label='Department'
                    margin='normal'
                    defaultValue='adminDepartment'
                  />
                </div>
                <div className={classes.rowWise}>
                  <TextField
                    label='Date of birth'
                    margin='normal'
                    defaultValue='DOB'
                  />
                  <TextField
                    label='Join year'
                    margin='normal'
                    defaultValue='DOJ'
                  />
                </div>
                <TextField
                  label='Email address'
                  margin='normal'
                  defaultValue='Email'
                />
                <TextField
                  label='Contact number'
                  margin='normal'
                  defaultValue='Contact'
                />
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsComponent;
