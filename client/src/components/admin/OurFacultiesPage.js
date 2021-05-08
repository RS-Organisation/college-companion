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
import useStylesCommon from '../../styles/CommonStyles';

const OurFacultiesPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles()
  };
  const [department, setDepartment] = useState('');
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setClicked(false);
    setDepartment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setClicked(true);
  };

  return (
    <Header>
      <div className={clicked ? classes.container95 : classes.container70}>
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
              <Button
                variant='contained'
                type='submit'
                className={classes.filledButton}
              >
                Submit
              </Button>
            </form>
          </Grid>
          {clicked && (
            <Grid item xs={12} lg={9}>
              <FacultyDetailTable />
            </Grid>
          )}
        </Grid>
      </div>
    </Header>
  );
};

export default OurFacultiesPage;
