import React, { useState } from 'react';

import { TextField, Typography, Divider, Button } from '@material-ui/core';

import useStyles from '../../styles/MarkAttendancePage';
import Header from './Header';
import MarkAttendanceTable from './MarkAttendanceTable';

const MarkAttendancePage = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);
  return (
    <Header>
      <Typography variant='h4' className={classes.subtitle}>
        Mark Attendance
      </Typography>
      <Divider />
      <div className={classes.main}>
        {!clicked ? (
          <form className={classes.form}>
            <TextField
              className={classes.root}
              select
              label='Department'
              SelectProps={{
                native: true,
              }}
              variant='outlined'
              margin='normal'
            >
              <option key='' value=''>
                {' '}
              </option>
              <option key='CS' value='CS'>
                CSE
              </option>
              <option key='EC' value='EC'>
                ECE
              </option>
              <option key='EE' value='EE'>
                EEE
              </option>
            </TextField>
            <TextField
              className={classes.root}
              select
              label='Section'
              SelectProps={{
                native: true,
              }}
              margin='normal'
              variant='outlined'
            >
              <option key='' value=''>
                {' '}
              </option>
              <option key='1' value='1'>
                1
              </option>
              <option key='2' value='2'>
                2
              </option>
              <option key='3' value='3'>
                3
              </option>
            </TextField>
            <TextField
              className={classes.root}
              select
              label='Year'
              SelectProps={{
                native: true,
              }}
              variant='outlined'
              margin='normal'
            >
              <option key='' value=''>
                {' '}
              </option>
              <option key='1' value='1'>
                1
              </option>
              <option key='2' value='2'>
                2
              </option>
              <option key='3' value='3'>
                3
              </option>
              <option key='4' value='4'>
                4
              </option>
            </TextField>
            <Button
              type='submit'
              className={classes.filledButton}
              onClick={() => setClicked(true)}
            >
              Search
            </Button>
          </form>
        ) : (
          <div style={{ marginTop: '1.2rem' }}>
            <MarkAttendanceTable />
          </div>
        )}
      </div>
    </Header>
  );
};

export default MarkAttendancePage;
