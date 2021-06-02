import React from 'react';
import submitLoader from '../../images/submitLoader.gif';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loaderDiv: {
    margin: '1rem 0',
    textAlign: 'center',
  },
});

const SubmitLoader = (props) => {
  const loader = props?.loaderImage ? props.loaderImage : submitLoader
  const classes = useStyles();
  return (
    <div className={classes.loaderDiv}>
      <img src={loader} alt='loader' />
    </div>
  );
};

export default SubmitLoader;
