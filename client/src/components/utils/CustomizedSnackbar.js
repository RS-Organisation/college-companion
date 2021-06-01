import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { removeSnackbar } from '../../redux/actions/snackbarActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomizedSnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { snackbarOpen, snackbarType, snackbarMessage } = useSelector(
    (store) => store?.snackbarReducer
  );
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(removeSnackbar());
  };

  return (
    <div className={classes.root}>
      <Snackbar
        key={Date.now()}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          elevation={6}
          variant='filled'
          onClose={handleClose}
          color={snackbarType}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
