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
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent'
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
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  heading: {
    marginBottom: '1rem',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center'
  }
}));
