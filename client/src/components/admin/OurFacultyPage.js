import React, { useState } from 'react';

import { Grid, FormControl, InputLabel, NativeSelect } from '@material-ui/core';
import Header from './Header';
import FacultyDetailTable from './FacultyDetailTable';

const OurFacultyPage = () => {
  // const classes = useStyles();
  // const [data, setData] = useState({});
  return (
    <Header>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={4}>
            <p>Search textfield</p>
          </Grid>
          <Grid item xs={12} lg={8}>
            {true && <FacultyDetailTable />}
          </Grid>
        </Grid>
      </div>
    </Header>
  );
};

export default OurFacultyPage;
