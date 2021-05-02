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
      fontSize: '1.1rem',
    },
    '& .MuiFormControl-marginNormal': {
      margin: '1rem 0'
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
    margin: '2rem 0 0.5rem 0',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
  divider: {
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: 'auto',
  },
  rowWise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
}));
