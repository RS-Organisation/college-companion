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
								value='Seema'
							/>
							<TextField
								label='Last Name'
								margin='normal'
								value='Tyagi'
							/>
						</div>
						<div className={classes.rowWise}>
							<TextField
								label='Designation'
								margin='normal'
								value='Reader'
							/>
							<TextField
								label='Department'
								margin='normal'
								value='ECE'
							/>
						</div>
						<div className={classes.rowWise}>
							<TextField
								label='Date of Birth'
								margin='normal'
								value='14-02-1988'
							/>
							<TextField
								label='Gender'
								margin='normal'
								value='Female'
							/>
						</div>
						<div className={classes.rowWise}>
							<TextField
								label='Email Address'
								margin='normal'
								value='seema@123.com'
							/>
							<TextField
								label='Contact Number'
								margin='normal'
								value='8974545457'
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
