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
                    value='First name'
                    className={classes.root}
                  />
                  <TextField
                    label='Last name'
                    margin='normal'
                    value='Last Name'
                  />
                </div>
                <div className={classes.rowWise}>
                  <TextField
                    label='Designation'
                    margin='normal'
                    value='Designation'
                  />
                  <TextField
                    label='Department'
                    margin='normal'
                    value='Department'
                  />
                </div>
                <div className={classes.rowWise}>
                  <TextField
                    label='Date of birth'
                    margin='normal'
                    value='DOB'
                  />
                  <TextField label='Join year' margin='normal' value='DOJ' />
                </div>
                <TextField
                  label='Registration number'
                  margin='normal'
                  value='Registration number'
                  className={classes.size}
                />
                <TextField
                  label='Email address'
                  margin='normal'
                  value='Email'
                  className={classes.size}
                />
                <TextField
                  label='Contact number'
                  margin='normal'
                  value='Contact'
                  className={classes.size}
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
