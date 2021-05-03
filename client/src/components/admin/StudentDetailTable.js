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
import useStyles from '../../styles/FacultyDetailTable';

function createData(name, enrollmentNumber, email, section) {
  return { name, enrollmentNumber, email, section };
}

const rows = [
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 1),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 3),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 3),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 3),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 3),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 3),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 3),
];

const StudentDetailTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='Student Detail Table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align='center'>
                Sr. No.
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Enrollment Number
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Email Address
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Section
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.name}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{row.enrollmentNumber}</TableCell>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center'>{row.email}</TableCell>
                <TableCell align='center'>{row.section}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StudentDetailTable;
