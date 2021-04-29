import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTypography-body1': {
      fontFamily: 'Nunito Sans',
    },
    '& .MuiFormControl-marginNormal': {
      marginTop: '1rem',
      marginBottom: '0.8rem',
      marginRight: '2.4rem',
    },
  },
  contentBox: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  avatarGrid: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  subtitle: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowWise: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  doubleTextField: {
    marginRight: '1.2rem',
  },
  singleTextField: {
    width: '60%',
  },
}));
