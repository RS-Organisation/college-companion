import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import Header from './Header';
import SubjectsTable from './SubjectsTable';
import useStyles from '../../styles/MarkAttendancePage';

const SubjectsPage = () => {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.container}>
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
