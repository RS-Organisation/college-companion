import { React, useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';

import Sidebar from './Sidebar';
import { facultyLogout } from '../../redux/actions/facultyActions';

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
    dispatch(facultyLogout(history));
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
          <Typography
            variant='h6'
            className={classes.title}
            onClick={() => history.push('/faculty/')}
          >
            CollegeCompanion
          </Typography>
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
                  pathname: '/faculty/profile',
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
                  pathname: '/faculty/profile',
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
              <PowerSettingsNewIcon />
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
