import React from 'react';

import useStyles from '../../styles/StudentDashboard';
import Header from './Header';

const FacultyDashboard = () => {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Header>
				<p>This is faculty dashboard.</p>
			</Header>
		</div>
	);
};

export default FacultyDashboard;
