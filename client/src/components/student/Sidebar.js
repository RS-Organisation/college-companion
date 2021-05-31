import React from 'react';
import { useSelector } from 'react-redux';
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
import ChatIcon from '@material-ui/icons/Chat';
import PanToolIcon from '@material-ui/icons/PanTool';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import ListIcon from '@material-ui/icons/List';
import SchoolIcon from '@material-ui/icons/School';
import DashboardIcon from '@material-ui/icons/Dashboard';

import useStyles from '../../styles/Sidebar';

export default function Sidebar(props) {
  const { open, handleDrawerClose } = props;

  const classes = useStyles();
  const theme = useTheme();

  const studentName = useSelector((store) => store.studentReducer.studentData.name);
  const firstName = studentName.split(' ')[0];

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
        <NavLink to='/student' exact className={classes.navLink}>
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
        <NavLink to='/student/academics' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary='Academic Performance' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='/student/attendance' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <PanToolIcon />
              </ListItemIcon>
              <ListItemText primary='Attendance' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary='Chat' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='/student/subjects' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary='Subjects List' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink
          to={{
            pathname: '/student/profile',
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
            pathname: '/student/profile',
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
