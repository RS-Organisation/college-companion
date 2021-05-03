import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import SubjectsTable from './SubjectsTable';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '70%',
    margin: 'auto',
  },
  subtitle: {
    margin: '0.7rem auto',
    fontFamily: 'Nunito Sans, sans-serif',
    color: '#41aea9',
    textAlign: 'center',
  },
}));

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
