import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';
import Header from './Header';
import FacultyDetailTable from './FacultyDetailTable';
import useStyles from '../../styles/OurFacultiesPage';

const OurFacultiesPage = () => {
  const classes = useStyles();
  const [department, setDepartment] = useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Header>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={4}>
            <form className={classes.form}>
              <FormControl variant="outlined" size="small" className={classes.root}>
                <InputLabel>Department</InputLabel>
                <Select
                  value={department}
                  onChange={handleChange}
                  label="Department"
                >
                  <MenuItem value={'CSE'}>CSE</MenuItem>
                  <MenuItem value={'IT'}>IT</MenuItem>
                  <MenuItem value={'ECE'}>ECE</MenuItem>
                  <MenuItem value={'EEE'}>EEE</MenuItem>
                  <MenuItem value={'ME'}>ME</MenuItem>
                </Select>
              </FormControl>
              <Button className={classes.filledButton}>
                Search
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} lg={8}>
            {true && <FacultyDetailTable />}
          </Grid>
        </Grid>
      </div>
    </Header>
  );
};

export default OurFacultiesPage;
