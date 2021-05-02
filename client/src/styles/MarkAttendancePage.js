import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '40% !important',
    },
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiOutlinedInput-input': {
      padding: '16px 14px',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
    '& .MuiFormHelperText-contained': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
    },
  },
  main: {
    width: '70%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    marginTop: '1.2rem',
  },
  subtitle: {
    margin: '0.8rem 0 0.5rem 0',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
  filledButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '1.1rem',
    padding: '7px 18px',
    marginTop: '1.6rem',
    fontWeight: '400',
    textTransform: 'none',
    backgroundColor: '#41aea9',
    color: 'white',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      transform: 'scale(1.02)',
      outline: 'none',
    },
  },
}));
