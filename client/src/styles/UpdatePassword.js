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
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
  },
  subtitle: {
    marginBottom: '2rem',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    margin: 'auto'
  },
  formField: {
    width: '100%',
    marginBottom: '2rem'
  },
  buttonDiv: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  outlinedButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'none',
    padding: '6px 18px',
    fontWeight: '600',
    color: '#41aea9',
    backgroundColor: 'white',
    border: '1px solid #41aea9',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      transform: 'scale(1.02)',
      outline: 'none'
    },
  },
  filledButton: {
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'none',
    padding: '8px 18px',
    fontWeight: '600',
    backgroundColor: '#41aea9',
    color: 'white',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      transform: 'scale(1.02)',
      outline: 'none'
    },
  },
}));
