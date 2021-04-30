import React, { useState } from 'react';

import useStyles from '../../styles/UpdatePassword';

import {
	Typography,
	Button,
	TextField,
	InputAdornment,
	IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const UpdatePassword = () => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const [showForm, setShowForm] = useState(false);
	const handleShowPassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	return (
		<div>
			<Typography variant='h5' className={classes.subtitle}>
				Password
      </Typography>
			<div>
				{!showForm ? (
					<Button
						onClick={() => setShowForm(true)}
						className={classes.filledButton}
					>
						Change Password
					</Button>
				) : (
					<form className={`${classes.root} ${classes.form}`}>
						<TextField
							className={classes.formField}
							label='New Password'
							variant='outlined'
							size='small'
							type={showPassword ? 'text' : 'password'}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton onClick={handleShowPassword}>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<TextField
							className={classes.formField}
							label='Confirm Password'
							variant='outlined'
							size='small'
							type='password'
						/>
						<div className={classes.buttonDiv}>
							<Button type='submit' className={classes.filledButton}>
								Save Changes
              </Button>
							<Button
								variant='outlined'
								onClick={() => setShowForm(false)}
								className={classes.outlinedButton}
							>
								Cancel
              </Button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default UpdatePassword;
