import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Divider } from '@material-ui/core';

import Header from './Header';
import SubjectsTable from './SubjectsTable';
import LoadingPage from '../utils/LoadingPage';
import { getSubjects } from '../../redux/actions/studentActions';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

const SubjectsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const { subjects } = useSelector((store) => store.studentReducer);

  useEffect(() => {
    if (subjects.length === 0) {
      dispatch(getSubjects());
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }
  }, [dispatch, subjects.length, loading]);

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          All Subjects
        </Typography>
        <Divider />
        {loading ? <LoadingPage /> : <SubjectsTable subjects={subjects} />}
      </div>
    </Header>
  );
};

export default SubjectsPage;
