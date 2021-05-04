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
import StudentDetailTable from './StudentDetailTable';
import useStyles from '../../styles/OurFacultiesPage';

const initialData = {
  department: '',
  year: '',
};

const OurStudentsPage = () => {
  const classes = useStyles();
  const [details, setDetails] = useState(initialData);
  const [clicked, setClicked] = useState(false);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setClicked(false);
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setClicked(true);
    console.log(details);
  };

  return (
    <Header>
      <div>
        <Typography variant='h4' className={classes.subtitle}>
          Our Students
        </Typography>
        <Divider />
        <Grid
          container
          spacing={0}
          justify={!clicked ? 'center' : 'flex-start'}
          alignItems={!clicked ? 'center' : 'stretch'}
        >
          <Grid item xs={12} lg={4}>
            <form className={classes.form} onSubmit={handleSearch}>
              <FormControl
                variant='outlined'
                size='small'
                className={classes.root}
              >
                <InputLabel>Department</InputLabel>
                <Select
                  name='department'
                  value={details.department}
                  onChange={handleChangeDetails}
                  label='Department'
                >
                  <MenuItem value={'CS'}>CSE</MenuItem>
                  <MenuItem value={'IT'}>IT</MenuItem>
                  <MenuItem value={'EC'}>ECE</MenuItem>
                  <MenuItem value={'EE'}>EEE</MenuItem>
                  <MenuItem value={'ME'}>ME</MenuItem>
                </Select>
              </FormControl>
              <FormControl
                variant='outlined'
                size='small'
                className={classes.root}
              >
                <InputLabel>Year</InputLabel>
                <Select
                  name='year'
                  value={details.year}
                  onChange={handleChangeDetails}
                  label='Year'
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
              <Button className={classes.filledButton} type='submit'>
                Search
              </Button>
            </form>
          </Grid>
          {clicked && (
            <Grid item xs={12} lg={8}>
              <StudentDetailTable />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default OurStudentsPage;
