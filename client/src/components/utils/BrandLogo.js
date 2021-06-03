import React from 'react';
import graduationCapIcon from '../../images/graduationCap.svg';
import useStyles from '../../styles/BrandLogo';

const BrandLogo = () => {
  const classes = useStyles();
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className={classes.BrandLogo} onClick={handleClick}>
      <img
        src={graduationCapIcon}
        alt='CollegeCompanion'
        className={classes.brandIcon}
      />
      <p className={classes.brandText}>CollegeCompanion</p>
    </div>
  );
};

export default BrandLogo;
