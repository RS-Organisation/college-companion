import React, { useState } from 'react';

import { Grid } from '@material-ui/core';
import Header from './Header';
import StudentDetailTable from './StudentDetailTable';

const OurStudentPage = () => {
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
            {true && <StudentDetailTable />}
          </Grid>
        </Grid>
      </div>
    </Header>
  );
};

export default OurStudentPage;
