import React from 'react';
import { Grid, Typography, TextField, Avatar, Divider } from '@material-ui/core';
import useStyles from '../../styles/ProfileDetails';
import useStylesCommon from '../../styles/CommonStyles';

const ProfileDetails = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };

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
                value='Atul Kumar'
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Registration Number'
                margin='normal'
                value='ADM2XXX0XX'
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Department'
                margin='normal'
                value='CSE'
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Joining Year'
                margin='normal'
                value='20XX'
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Date of Birth'
                margin='normal'
                value='30-12-1997'
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
              <TextField
                label='Email Address'
                margin='normal'
                value='atulkumar@123.com'
                inputProps={{ readOnly: true }}
                className={classes.inputTextField}
              />
            </div>
            <div className={classes.rowWise}>
              <TextField
                label='Contact Number'
                margin='normal'
                value='8447088311'
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
