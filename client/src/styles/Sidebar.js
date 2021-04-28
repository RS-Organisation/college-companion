import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiTypography-body1': {
      fontFamily: 'Nunito Sans',
      fontSize: '1rem'
    }
  },
  hide: {
    display: 'none',
  },
  leftIcon: {
    color: '#41aea9',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerTitle: {
    marginLeft: '1rem',
    fontFamily: 'Nunito Sans',
    fontSize: '1.5rem',
    color: '#41aea9'
  },
  listItem: {
    padding: 0
  },
  listItemButton: {
    padding: '1rem',
    paddingLeft: '1rem',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      color: 'white'
    }
  }
}));
