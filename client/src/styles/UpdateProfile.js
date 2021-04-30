import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontFamily: 'Nunito Sans',
    },
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiFormControl-marginNormal': {
      marginTop: '1rem',
      marginBottom: '0.8rem',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#41aea9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#41aea9',
    },
  },
  contentBox: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  avatarGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  subtitle: {
    marginBottom: '1rem',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: 'auto'
  },
  rowWise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filledButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '1.1rem',
    textTransform: 'none',
    padding: '7px 18px',
    margin: '1.6rem 0',
    fontWeight: '400',
    backgroundColor: '#41aea9',
    color: 'white',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      transform: 'scale(1.02)',
      outline: 'none'
    },
  }
}));
