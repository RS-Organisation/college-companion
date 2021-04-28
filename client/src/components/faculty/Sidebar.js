import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import PublishIcon from '@material-ui/icons/Publish';

import useStyles from '../../styles/Sidebar';

export default function Sidebar(props) {
	const classes = useStyles();
	const theme = useTheme();
	const { open, handleDrawerClose } = props;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<h1 className={classes.drawerTitle}>Hi, Faculty!</h1>
					<IconButton className={classes.leftIcon} onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List className={classes.listItem}>
					<ListItem button className={classes.listItemButton}>
						<ListItemIcon>
							<LibraryAddCheckIcon />
						</ListItemIcon>
						<ListItemText primary='Mark Attendance' />
					</ListItem>
				</List>
				<Divider />
				<List className={classes.listItem}>
					<ListItem button className={classes.listItemButton}>
						<ListItemIcon>
							<LockIcon />
						</ListItemIcon>
						<ListItemText primary='Update Password' />
					</ListItem>
				</List>
				<Divider />
				<List className={classes.listItem}>
					<ListItem button className={classes.listItemButton}>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary='Update Profile' />
					</ListItem>
				</List>
				<Divider />
				<List className={classes.listItem}>
					<ListItem button className={classes.listItemButton}>
						<ListItemIcon>
							<PublishIcon />
						</ListItemIcon>
						<ListItemText primary='Upload Marks' />
					</ListItem>
				</List>
				<Divider />
			</Drawer>
			<main className={`${classes.content} ${open && classes.contentShift}`}>
				{/*<div className={classes.drawerHeader} />*/}
				{props.children}
			</main>
		</div>
	);
}
