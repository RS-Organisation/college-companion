import { React, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

import useStyles from '../../styles/Header';
import Sidebar from './Sidebar';

const Header = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.round}>
      <AppBar
        position='static'
        className={`${classes.appBar} ${open && classes.appBarShift}`}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={`${classes.menuButton} ${open && classes.hide}`}
            color='inherit'
            aria-label='menu'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            News
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color='inherit'>
              <SettingsIcon />
            </IconButton>
            <IconButton edge='end' color='inherit'>
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      >
        {props.children}
      </Sidebar>
    </div>
  );
};

export default Header;
