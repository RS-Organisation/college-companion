import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#41aea9',
    position: 'fixed',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100vh',
  },
  contentBox: {
    width: '50%',
    backgroundColor: '#ffff',
    height: '60%',
    borderRadius: '10px',
  },
  heading: {
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    margin: '1.5rem 0',
    textAlign: 'center',
  },
  textContainer: {
    width: '100%',
    textAlign: 'center',
  },
  formField: {
    width: '50%',
    margin: '1.2rem auto',
  },
  filledButton: {
    width: '50%',
    marginTop: '1.5rem',
    color: 'white',
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '1rem',
    textTransform: 'none',
    fontWeight: '400',
    backgroundColor: '#41aea9',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      transform: 'scale(1.01)',
    },
  }
}));