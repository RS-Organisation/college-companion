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
    '& .MuiInputBase-input': {
      fontFamily: 'Nunito Sans, sans-serif',
    }
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
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginTop: '3rem',
    marginRight: '2rem'
  },
  divider: {
    marginBottom: '3rem',
  },
  inputTextField: {
    width: '40%'
  }
}));
