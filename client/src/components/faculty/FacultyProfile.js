import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

import Header from './Header';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';

import useStyles from '../../styles/AdminProfile';
import useStylesCommon from '../../styles/CommonStyles';

const FacultyProfile = (props) => {
	const classes = {
		...useStylesCommon(),
		...useStyles()
	};

	const selected = props?.location?.aboutProps?.selected || 'profile';
	const [clickedButton, setClickedButton] = useState(selected);

	useEffect(() => {
		setClickedButton(selected);
	}, [selected]);

	return (
		<Header>
			<div className={classes.container70}>
				<div className={classes.titleDiv}>
					<Typography variant='h4' className={classes.subtitle}>
						My Account
          </Typography>
				</div>
				<div className={classes.header}>
					<span
						className={`${classes.span} ${clickedButton === 'profile' && classes.clickedButton
							}`}
						onClick={() => setClickedButton('profile')}
					>
						Profile
          </span>
					<span
						className={`${classes.span} ${clickedButton === 'security' && classes.clickedButton
							}`}
						onClick={() => setClickedButton('security')}
					>
						Security
          </span>
				</div>
				<div>
					{clickedButton === 'profile' ? (
						<UpdateProfile />
					) : (
						<UpdatePassword />
					)}
				</div>
			</div>
		</Header>
	);
};

export default FacultyProfile;
