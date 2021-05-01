import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiFormControl-marginNormal': {
      margin: '1.2rem 0'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    }
  },
  formContainer: {
    textAlign: 'center'
  },
  subtitle: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '2rem',
    color: '#41aea9',
    marginTop: '1rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    margin: '2rem auto'
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
    padding: '7px 18px',
    marginTop: '1.6rem',
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
