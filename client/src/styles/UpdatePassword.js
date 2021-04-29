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
  container: {
    margin: '1.2rem',
    padding: '1.2rem',
  },
  subtitle: {
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formField: {
    width: '30%',
    marginBottom: '2rem',
  },
  size: {
    width: '50% !important',
  },
  rowWise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlinedButton: {
    width: '14%',
    marginRight: '1rem',
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'none',
    padding: '6px 6px',
    fontWeight: '600',
    color: '#41aea9',
    backgroundColor: 'white',
    border: '1px solid #41aea9',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'white',
      transform: 'scale(1.02)',
    },
  },
  filledButton: {
    width: '15%',
    marginRight: '1rem',
    fontFamily: 'Nunito Sans, sans-serif',
    textTransform: 'none',
    padding: '6px 6px',
    fontWeight: '600',
    backgroundColor: '#41aea9',
    color: 'white',
    border: 'none',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#41aea9',
      transform: 'scale(1.02)',
    },
  },
}));
