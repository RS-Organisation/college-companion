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
import FacultyDetailTable from './FacultyDetailTable';
import useStyles from '../../styles/OurFacultiesPage';

const OurFacultiesPage = () => {
  const classes = useStyles();
  const [department, setDepartment] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setClicked(false);
    setDepartment(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setClicked(true);
    console.log(department);
  };

  return (
    <Header>
      <div>
        <Typography variant='h4' className={classes.subtitle}>
          Our Faculties
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
                  value={department}
                  onChange={handleChange}
                  label='Department'
                >
                  <MenuItem value={'CS'}>CSE</MenuItem>
                  <MenuItem value={'IT'}>IT</MenuItem>
                  <MenuItem value={'EC'}>ECE</MenuItem>
                  <MenuItem value={'EE'}>EEE</MenuItem>
                  <MenuItem value={'ME'}>ME</MenuItem>
                </Select>
              </FormControl>
              <Button className={classes.filledButton} type='submit'>
                Search
              </Button>
            </form>
          </Grid>
          {clicked && (
            <Grid item xs={12} lg={8}>
              <FacultyDetailTable />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default OurFacultiesPage;
