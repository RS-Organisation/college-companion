import React from 'react';
import loader from '../../images/loader.gif';
import useStyles from '../../styles/CommonStyles';

const LoadingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <img src={loader} alt='loader' className={classes.loaderImage} />
    </div>
  );
};

export default LoadingPage;
