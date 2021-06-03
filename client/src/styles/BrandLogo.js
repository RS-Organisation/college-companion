import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  BrandLogo: {
    position: 'fixed',
    top: '0.5rem',
    left: '1rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  brandIcon: {
    width: '48px',
  },
  brandText: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontFamily: 'Montserrat, sans-serif',
    margin: '-8px 0 0 8px',
  },
}));
