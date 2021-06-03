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
      borderColor: '#41aea9',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Nunito Sans, sans-serif',
    },
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2rem 0',
  },
  subjectCode: {
    width: '30%',
    margin: '0',
  },
  buttonDiv: {
    width: '100%',
    textAlign: 'center',
  },
  submitButton: {
    width: '15%',
    margin: '0.5rem 0 1.5rem 0',
  },
}));
