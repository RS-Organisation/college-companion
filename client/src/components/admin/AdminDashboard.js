import React from 'react';

import useStyles from '../../styles/StudentDashboard';
import Header from './Header';

const AdminDashboard = () => {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Header>
				<p>This is admin dashboard.</p>
			</Header>
		</div>
	);
};

export default AdminDashboard;
