import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  buttonDiv: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  studentButton: {
    width: '30%',
    color: 'black',
    margin: 'auto',
    backgroundColor: 'white',
  },
  facultyButton: {
    width: '30%',
    margin: 'auto',
  },
  grid: {},
  formGrid: {
    width: '80%',
    margin: 'auto',
  },
  form: {
    marginTop: theme.spacing(5),
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(3),
  },
  spanText: {
    fontSize: '13px',
  },
  textField: {
    '& .MuiOutlinedInput-input': {
      padding: '13px 13px',
    },
  },
}));
