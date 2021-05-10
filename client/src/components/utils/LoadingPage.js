import React from 'react';
import loader from '../../images/loader.gif';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loader: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100vw',
  },
  loaderImage: {
    height: '5rem',
    width: '5rem',
  },
});

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <img src={loader} alt='loader' className={classes.loaderImage} />
    </div>
  );
};

export default LoadingPage;
