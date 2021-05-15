import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import useStyles from '../../styles/MarkAttendanceTable';

const FacultyDetailTable = (props) => {
  const { faculties } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label='Faculty Detail Table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align='center'>
                Sr. No.
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Registration Number
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Email Address
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Joining Year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faculties.map((faculty, index) => (
              <TableRow hover key={index}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{faculty.registrationNumber}</TableCell>
                <TableCell align='center'>{faculty.name}</TableCell>
                <TableCell align='center'>{faculty.email}</TableCell>
                <TableCell align='center'>{faculty.joiningYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FacultyDetailTable;
