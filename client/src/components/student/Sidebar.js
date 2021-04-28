import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import useStyles from '../../styles/Sidebar';

const drawerWidth = 240;

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
          <IconButton className={classes.leftIcon} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            {/*<ListItemIcon></ListItemIcon>*/}
            <ListItemText primary='List1' />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            {/*<ListItemIcon></ListItemIcon>*/}
            <ListItemText primary='List2' />
          </ListItem>
        </List>
      </Drawer>
      <main className={`${classes.content} ${open && classes.contentShift}`}>
        {/*<div className={classes.drawerHeader} />*/}
        {props.children}
      </main>
    </div>
  );
}
