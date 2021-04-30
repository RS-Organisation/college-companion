import React, { useState, useEffect } from 'react';

import Header from './Header';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';
import useStyles from '../../styles/AdminProfile';

const StudentProfile = (props) => {
	const classes = useStyles();
	const selected = props?.location?.aboutProps?.selected || 'profile';
	const [clickedButton, setClickedButton] = useState(selected);
	useEffect(() => {
		setClickedButton(selected);
	}, [selected]);
	return (
		<Header>
			<div className={classes.container}>
				<div className={classes.titleDiv}>
					<p className={classes.title}>My Account</p>
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

export default StudentProfile;
