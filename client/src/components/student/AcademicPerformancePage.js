import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider,
} from '@material-ui/core';
import Header from './Header';
import AcademicPerformanceTable from './AcademicPerformanceTable';
import useStyles from '../../styles/OurFacultiesPage';
import useStylesCommon from '../../styles/CommonStyles';
import { getMarks } from '../../redux/actions/studentActions';

const AcademicPerformancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };
  const dispatch = useDispatch();

  const { marksList, marksSearchedQuery } = useSelector(
    (store) => store.studentReducer
  );

  const [details, setDetails] = useState({
    examType: marksSearchedQuery.examType,
    semester: marksSearchedQuery.semester,
  });

  const showMarksTable = details.examType !== '' && details.semester !== '';

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (details.semester && details.examType) {
      dispatch(getMarks(details));
    }
    // console.log(details);
  };

  return (
    <Header>
      <div
        className={showMarksTable ? classes.container95 : classes.container70}
      >
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
                >
                  <InputLabel>Exam Type</InputLabel>
                  <Select
                    name='examType'
                    value={details.examType}
                    onChange={handleChangeDetails}
                    label='Exam Type'
                  >
                    <MenuItem value={'internal'}>Internal</MenuItem>
                    <MenuItem value={'external'}>External</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant='outlined'
                  size='small'
                  className={classes.root}
                >
                  <InputLabel>Semester</InputLabel>
                  <Select
                    name='semester'
                    value={details.semester}
                    onChange={handleChangeDetails}
                    label='Semester'
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                  </Select>
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
                <AcademicPerformanceTable
                  examType={details.examType}
                  marksList={marksList}
                />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </Header>
  );
};

export default AcademicPerformancePage;
