import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  CssBaseline,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import PublishIcon from '@material-ui/icons/Publish';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { clearStudentsList } from '../../redux/actions/facultyActions';

import useStyles from '../../styles/Sidebar';

export default function Sidebar(props) {
  const { open, handleDrawerClose } = props;

  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();

  const facultyName = useSelector((store) => store.facultyReducer.facultyData.name);
  const firstName = facultyName.split(' ')[0];

  const handleClick = () => {
    dispatch(clearStudentsList());
  };

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
          <h1 className={classes.drawerTitle}>Hi, {firstName}</h1>
          <IconButton className={classes.leftIcon} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <NavLink to='/faculty' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink
          to='/faculty/markAttendance'
          exact
          className={classes.navLink}
          onClick={handleClick}
        >
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <LibraryAddCheckIcon />
              </ListItemIcon>
              <ListItemText primary='Mark Attendance' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink
          to='/faculty/uploadMarks'
          exact
          className={classes.navLink}
          onClick={handleClick}
        >
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <PublishIcon />
              </ListItemIcon>
              <ListItemText primary='Upload Marks' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink
          to={{
            pathname: '/faculty/profile',
            aboutProps: {
              selected: 'security',
            },
          }}
          exact
          className={classes.navLink}
        >
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText primary='Update Password' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink
          to={{
            pathname: '/faculty/profile',
            aboutProps: {
              selected: 'profile',
            },
          }}
          exact
          className={classes.navLink}
        >
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary='Update Profile' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
      </Drawer>
      <main className={`${classes.content} ${open && classes.contentShift}`}>
        {props.children}
      </main>
    </div>
  );
}
