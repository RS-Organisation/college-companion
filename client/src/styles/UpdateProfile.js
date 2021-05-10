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
    '& .MuiFormControl-marginNormal': {
      marginTop: '1rem',
      marginBottom: '0.8rem',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#41aea9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#41aea9',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Nunito Sans, sans-serif',
    },
  },
  contentBox: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  avatarGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    marginTop: '1rem',
  },
  heading: {
    marginBottom: '1rem',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
  imageModalTitle: {
    marginBottom: '2rem',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
  modalForm: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '1.2rem 1.5rem',
    borderRadius: '5px',
    outline: 'none',
  },
  editIcon: {
    marginLeft: theme.spacing(22),
    marginTop: '-0.5rem',
    fontSize: '1.2rem',
    color: '#707b80',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  buttonDiv: {
    marginTop: '2rem',
  },
}));
