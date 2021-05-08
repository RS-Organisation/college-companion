import 'date-fns';
import React, { useState } from 'react';
import {
	Grid,
	Typography,
	TextField,
	Avatar,
	Button,
	MenuItem
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from '../../styles/UpdateProfile';
import useStylesCommon from '../../styles/CommonStyles';
import materialTheme from '../../styles/MuiTheme';

const initialData = {
	name: 'Atul Kumar',
	gender: 'M',
	dob: new Date('2014-08-18T21:11:54'),
	department: 'IT',
	designation: 'Professor',
	email: 'atul123@gmail.com',
	contactNumber: '8285754512',
	aadharCardNumber: '78456545781232'
};

const UpdateProfile = () => {
	const classes = {
		...useStylesCommon(),
		...useStyles()
	};
	const [details, setDetails] = useState(initialData);

	const handleChangeDetails = (e) => {
		const { name } = e.target;
		setDetails({ ...details, [name]: e.target.value });
	};

	const handleChangeDOB = (dob) => {
		setDetails({ ...details, dob });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(details);
	};

	return (
		<div classsName={classes.contentBox}>
			<Typography variant='h5' className={classes.heading}>
				Personal Information
      </Typography>
			<Grid container spacing={0}>
				<Grid item xs={12} lg={3} className={classes.avatarGrid}>
					<Avatar alt='Remy Sharp' className={classes.avatar}>
						A
          </Avatar>
				</Grid>
				<Grid item xs={12} lg={9}>
					<form
						autoComplete="off"
						className={`${classes.root} ${classes.form70}`}
						onSubmit={handleSubmit}
					>
						<div className={classes.rowWise}>
							<TextField
								name='name'
								label='Name'
								margin='normal'
								value={details.name}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							/>
							<TextField
								select
								name='gender'
								label='Gender'
								size='small'
								margin='normal'
								value={details.gender}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							>
								<MenuItem value={'M'}>Male</MenuItem>
								<MenuItem value={'F'}>Female</MenuItem>
								<MenuItem value={'O'}>Other</MenuItem>
							</TextField>
						</div>
						<div className={classes.rowWise}>
							<TextField
								select
								name='department'
								label='Department'
								margin='normal'
								value={details.department}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							>
								<MenuItem value={'CS'}>CSE</MenuItem>
								<MenuItem value={'IT'}>IT</MenuItem>
								<MenuItem value={'EC'}>ECE</MenuItem>
								<MenuItem value={'EE'}>EEE</MenuItem>
								<MenuItem value={'ME'}>ME</MenuItem>
							</TextField>
							<TextField
								select
								name='designation'
								label='Designation'
								size='small'
								margin='normal'
								value={details.designation}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							>
								<MenuItem value={'Assistant Professor'}>Assistant Professor</MenuItem>
								<MenuItem value={'Associate Professor'}>Associate Professor</MenuItem>
								<MenuItem value={'Professor'}>Professor</MenuItem>
								<MenuItem value={'HOD'}>HOD</MenuItem>
							</TextField>
						</div>
						<div className={classes.rowWise}>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<ThemeProvider theme={materialTheme}>
									<KeyboardDatePicker
										name='dob'
										size="small"
										margin="normal"
										label="Date of Birth"
										format="dd/MM/yyyy"
										value={details.dob}
										onChange={handleChangeDOB}
										className={classes.inputTextField}
									/>
								</ThemeProvider>
							</MuiPickersUtilsProvider>
							<TextField
								name='email'
								label='Email Address'
								margin='normal'
								value={details.email}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							/>
						</div>
						<div className={classes.rowWise}>
							<TextField
								name='contactNumber'
								label='Contact Number'
								margin='normal'
								value={details.contactNumber}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							/>
							<TextField
								name='aadharCardNumber'
								label='Aadhar Card Number'
								margin='normal'
								value={details.aadharCardNumber}
								onChange={handleChangeDetails}
								className={classes.inputTextField}
							/>
						</div>
						<Button
							type='submit'
							variant='contained'
							className={`${classes.filledButton} ${classes.submitButton}`}
						>
							Save Changes
            </Button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};

export default UpdateProfile;
