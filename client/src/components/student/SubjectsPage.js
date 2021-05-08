import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import Header from './Header';
import SubjectsTable from './SubjectsTable';
import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

const SubjectsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          All Subjects
        </Typography>
        <Divider />
        <SubjectsTable />
      </div>
    </Header>
  );
};

export default SubjectsPage;
