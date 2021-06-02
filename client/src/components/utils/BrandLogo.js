import React from 'react';

import graduationCapIcon from '../../images/graduationCap.svg';
import useStyles from '../../styles/BrandLogo';

const BrandLogo = () => {
  const classes = useStyles();
  return (
    <div className={classes.BrandLogo}>
      <img src={graduationCapIcon} alt='CollegeCompanion' className={classes.brandIcon} />
      <p className={classes.brandText}>CollegeCompanion</p>
    </div>
  );
};

export default BrandLogo;
