import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiInputBase-input': {
      fontFamily: 'Nunito Sans, sans-serif',
      color: 'white',
    },
    '& .MuiFormLabel-root': {
      color: 'white',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid white'
    },
    '& .MuiInput-underline:after': {
      borderBottom: '1px solid white'
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '1px solid white'
    },
    width: '30%',
    margin: '0 auto',
  },
  returnButton: {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'white',
    color: '#41aea9',
    textTransform: 'none',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '600',
    fontSize: '1rem',
    padding: '3px 8px',
    boxShadow: 'none',
    border: 'none',
    borderRadius: '8px',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      transform: 'scale(1.01)',
      boxShadow: 'none',
    },
  },
  main: {
    backgroundColor: '#41aea9',
    position: 'fixed',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100vh',
  },
  container: {
    width: '70%',
    textAlign: 'center',
    margin: '4rem auto',
  },
  title: {
    color: 'white',
    fontFamily: 'Nunito Sans, sans-serif',
    marginTop: '3rem',
    marginBottom: '1rem'
  },
  subtitle: {
    color: 'white',
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: '300',
    marginBottom: '4rem',
  },
  buttonContainer: {
    marginTop: '4rem',
  },
  inputTextField: {
    width: '100%',
  },
  filledButton: {
    width: '100%',
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '1.1rem',
    fontWeight: '400',
    textTransform: 'none',
    backgroundColor: '#ffff',
    color: '#41aea9',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ffff',
      transform: 'scale(1.01)',
      outline: 'none',
    },
  }
}));
