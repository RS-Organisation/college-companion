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
    fontSize: '1rem',
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
    }
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2.5rem 0'
  },
  subjectCode: {
    width: '30%',
    margin: '0'
  },
  buttonDiv: {
    width: '100%',
    textAlign: 'center'
  },
  submitButton: {
    width: '15%',
    margin: '0.5rem 0 1.5rem 0'
  }
}));
