import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Divider } from '@material-ui/core';

import Header from './Header';
import SubjectsTable from './SubjectsTable';
import SubmitLoader from '../utils/SubmitLoader';
import { getSubjects } from '../../redux/actions/studentActions';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

const SubjectsPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const { subjects } = useSelector((store) => store.studentReducer);

  useEffect(() => {
    if (subjects.length === 0) {
      dispatch(getSubjects());
    } else {
      setLoading(false);
    }
  }, [dispatch, subjects]);

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          All Subjects
        </Typography>
        <Divider />
        {loading ? (
          <div style={{ marginTop: '4rem' }}>
            <SubmitLoader />
          </div>
        ) : (
          <SubjectsTable subjects={subjects} />
        )}
      </div>
    </Header>
  );
};

export default SubjectsPage;
