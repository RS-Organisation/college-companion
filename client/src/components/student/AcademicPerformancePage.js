import React, { useState } from 'react';
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

const initialData = {
  subjectList: [],
  semester: '',
  examType: '',
};

const AcademicPerformancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };
  const [details, setDetails] = useState(initialData);
  const [clicked, setClicked] = useState(false);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setClicked(false);
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    console.log(details);
  };

  return (
    <Header>
      <div className={clicked ? classes.container95 : classes.container70}>
        <div>
          <Typography variant='h4' className={classes.subtitle}>
            Academic Performance
        </Typography>
          <Divider />
          <Grid
            container
            spacing={0}
            justify={!clicked ? 'center' : 'flex-start'}
            alignItems={!clicked ? 'center' : 'stretch'}
          >
            <Grid item xs={12} lg={3}>
              <form
                className={clicked ? classes.form60 : classes.form100}
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
            {clicked && (
              <Grid item xs={12} lg={9}>
                <AcademicPerformanceTable examType={details.examType} />
              </Grid>
            )}
          </Grid>
        </div>
      </div>
    </Header>
  );
};

export default AcademicPerformancePage;
