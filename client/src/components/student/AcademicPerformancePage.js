import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';

import Header from './Header';
import AcademicPerformanceTable from './AcademicPerformanceTable';
import LoadingPage from '../utils/LoadingPage';
import { getMarks, getSubjects } from '../../redux/actions/studentActions';
import { validator } from '../utils/helperFunctions';
import { examTypes, semesters } from '../utils/defaultValues';

import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';

const AcademicPerformancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const { marksList, marksSearchedQuery, subjects } = useSelector(
    (store) => store.studentReducer
  );

  const [details, setDetails] = useState({
    examType: marksSearchedQuery.examType,
    semester: marksSearchedQuery.semester,
  });
  const [errors, setErrors] = useState(null);

  const showMarksTable =
    marksSearchedQuery.examType !== '' && marksSearchedQuery.semester !== '';

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ['semester', 'examType'];
    const flag = validator(details, requiredFields);
    if (flag === true) {
      dispatch(getMarks(details));
      dispatch(getSubjects());
      setErrors(null);
    } else {
      setErrors(flag);
    }
  };

  return (
    <Header>
      <div className={showMarksTable ? classes.container95 : classes.container70}>
        <div>
          <Typography variant='h4' className={classes.subtitle}>
            Academic Performance
          </Typography>
          <Divider />
          <Grid
            container
            spacing={0}
            justify={!showMarksTable ? 'center' : 'flex-start'}
            alignItems={!showMarksTable ? 'center' : 'stretch'}
          >
            <Grid item xs={12} lg={3}>
              <form
                className={showMarksTable ? classes.form60 : classes.form100}
                onSubmit={handleSubmit}
              >
                <FormControl
                  variant='outlined'
                  size='small'
                  className={classes.root}
                  {...(errors && {
                    error: errors.examType !== '',
                    helperText: errors.examType,
                  })}
                >
                  <InputLabel>Exam Type</InputLabel>
                  <Select
                    name='examType'
                    value={details.examType}
                    onChange={handleChangeDetails}
                    label='Exam Type'
                  >
                    {examTypes.map(examType => (
                      <MenuItem value={examType}>{examType}</MenuItem>
                    ))}
                  </Select>
                  {errors && <FormHelperText>{errors.examType}</FormHelperText>}
                </FormControl>
                <FormControl
                  variant='outlined'
                  size='small'
                  className={classes.root}
                  {...(errors && {
                    error: errors.semester !== '',
                    helperText: errors.semester,
                  })}
                >
                  <InputLabel>Semester</InputLabel>
                  <Select
                    name='semester'
                    value={details.semester}
                    onChange={handleChangeDetails}
                    label='Semester'
                  >
                    {semesters.map(semester => (
                      <MenuItem value={semester}>{semester}</MenuItem>
                    ))}
                  </Select>
                  {errors && <FormHelperText>{errors.semester}</FormHelperText>}
                </FormControl>
                <Button
                  variant='contained'
                  type='submit'
                  className={classes.filledButton}
                >
                  Search
                </Button>
              </form>
            </Grid>
            {showMarksTable && (
              <Grid item xs={12} lg={9}>
                {subjects.length === 0 ? (
                  <LoadingPage />
                ) : (
                  <AcademicPerformanceTable
                    examType={details.examType}
                    marksList={marksList}
                    subjectsList={subjects}
                  />
                )}
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </Header>
  );
};

export default AcademicPerformancePage;
