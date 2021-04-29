import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PostAddIcon from '@material-ui/icons/PostAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddBoxIcon from '@material-ui/icons/AddBox';

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
          <h1 className={classes.drawerTitle}>Hi, Admin!</h1>
          <IconButton className={classes.leftIcon} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary='Add Admin' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <AddBoxIcon />
              </ListItemIcon>
              <ListItemText primary='Add Faculty' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary='Add Student' />
            </ListItem>
          </List>
          <Divider />
        </NavLink>
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary='Add Subject' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              <ListItemText primary='Our Faculties' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Our Students' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink to='#' exact className={classes.navLink}>
          <List className={classes.listItem}>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary='Subjects' />
            </ListItem>
          </List>
        </NavLink>
        <Divider />
        <NavLink
          to={{
            pathname: '/admin/profile',
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
            pathname: '/admin/profile',
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
        {/*<div className={classes.drawerHeader} />*/}
        {props.children}
      </main>
    </div>
  );
}
