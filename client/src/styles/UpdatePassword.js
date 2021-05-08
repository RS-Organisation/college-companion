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
    '& .MuiInputBase-input': {
      fontFamily: 'Nunito Sans, sans-serif',
    }
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
    backgroundColor: '#fafafa',
    border: '1px solid #41aea9',
    transition: '0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#fafafa',
      transform: 'scale(1.01)',
      outline: 'none'
    },
  },
  heading: {
    marginBottom: '2rem',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center'
  },
  formContainer: {
    textAlign: 'center'
  }
}));
