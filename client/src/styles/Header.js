import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  appBar: {
    backgroundColor: '#41aea9',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Montserrat, sans-serif',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  accountCircle: {
    marginRight: '1rem',
  },
  settingIcon: {
    marginRight: '1rem',
  },
  menuItem: {
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      color: 'white',
    },
    fontSize: '0.9rem',
  },
  menu: {
    marginTop: '2.5rem',
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));
