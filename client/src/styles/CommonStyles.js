import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiFormControl-marginNormal': {
      margin: '1.2rem 0',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
    '& .MuiIconButton-root': {
      padding: 0,
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
  container70: {
    width: '70%',
    margin: 'auto',
  },
  container95: {
    width: '95%',
    margin: 'auto',
  },
  filledButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '400',
    textTransform: 'none',
    backgroundColor: '#41aea9',
    color: 'white',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      transform: 'scale(1.005)',
      outline: 'none',
    },
  },
  form30: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    minWidth: '250px',
    margin: 'auto',
  },
  form35: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    margin: '4rem auto',
  },
  form50: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    margin: '2rem auto',
  },
  form60: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    margin: '5rem auto',
  },
  form70: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
    margin: 'auto',
  },
  form90: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: 'auto',
  },
  form100: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '5rem auto',
  },
  inputTextField: {
    width: '45%',
  },
  outlinedButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'none',
    padding: '6px 18px',
    fontWeight: '600',
    color: '#41aea9',
    backgroundColor: '#fafafa',
    border: '1px solid #41aea9',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#fafafa',
      transform: 'scale(1.01)',
      outline: 'none',
    },
  },
  rowWise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  submitButton: {
    margin: '2rem 0',
    fontSize: '1.1rem',
  },
  subtitle: {
    margin: '0.5rem auto',
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '2rem',
    color: '#41aea9',
    textAlign: 'center',
  },
}));
