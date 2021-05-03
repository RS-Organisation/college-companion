import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginBottom: '2rem',
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9'
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent'
    }
  },
  container: {
    width: '70%',
    margin: 'auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    margin: '4rem auto',
  },
  subtitle: {
    margin: '0.7rem auto',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
  filledButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '1.1rem',
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
