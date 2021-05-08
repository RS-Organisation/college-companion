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

function createData(subjectCode, subjectName) {
  return { subjectCode, subjectName };
}

const rows = [
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
  createData('ETCS-206', 'Circuit and Systems'),
  createData('ETCS-144', 'Applied Chemistry'),
  createData('ETCS-208', 'Java Programming'),
];

const SubjectDetailTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label='Subject Detail Table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align='center'>
                Sr. No.
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Subject Code
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Subject Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{row.subjectCode}</TableCell>
                <TableCell align='center'>{row.subjectName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SubjectDetailTable;
