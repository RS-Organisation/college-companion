import { React, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

import Sidebar from './Sidebar';
import { adminLogout } from '../../redux/actions/adminActions';

import useStyles from '../../styles/Header';

const Header = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    dispatch(adminLogout(history));
    handleAccountClose();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAccountOpen = (event) => {
    setOpenAccount(true);
    setAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setOpenAccount(false);
    setAnchorEl(null);
  };

  const handleSettingOpen = (event) => {
    setOpenSetting(true);
    setAnchorEl(event.currentTarget);
  };

  const handleSettingClose = () => {
    setOpenSetting(false);
    setAnchorEl(null);
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              color='inherit'
              onClick={handleSettingOpen}
              className={classes.settingIcon}
            >
              <SettingsIcon />
            </IconButton>
            <Menu
              className={classes.menu}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={openSetting}
              onClose={handleSettingClose}
            >
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
                <MenuItem
                  onClick={handleSettingClose}
                  className={classes.menuItem}
                >
                  Update Profile
                </MenuItem>
              </NavLink>
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
                <MenuItem
                  onClick={handleSettingClose}
                  className={classes.menuItem}
                >
                  Update Password
                </MenuItem>
              </NavLink>
            </Menu>
            <IconButton
              edge='end'
              color='inherit'
              className={classes.accountCircle}
              onClick={handleAccountOpen}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              className={classes.menu}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={openAccount}
              onClose={handleAccountClose}
            >
              <MenuItem
                onClick={handleAccountClose}
                className={classes.menuItem}
              >
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout} className={classes.menuItem}>
                Logout
              </MenuItem>
            </Menu>
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
