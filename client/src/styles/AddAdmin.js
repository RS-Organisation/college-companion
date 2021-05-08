import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiFormLabel-root': {
      color: '#41aea9',
      fontFamily: 'Nunito Sans, sans-serif',
      fontWeight: '300',
      fontSize: '15px'
    },
    '& .MuiFormControl-marginNormal': {
      margin: '1.2rem 0'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#41aea9',
    },
    '& .MuiIconButton-root': {
      padding: 0
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent'
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Nunito Sans, sans-serif',
    }
  }
}));
