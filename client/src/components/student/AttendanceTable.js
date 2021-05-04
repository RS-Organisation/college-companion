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

function createData(subjectCode, subjectName, lecturesHeld, lecturesAttended) {
  return { subjectCode, subjectName, lecturesHeld, lecturesAttended };
}

const rows = [
  createData('ETCS-206', 'Circuit and Systems', 30, 16),
  createData('ETCS-144', 'Applied Physics', 30, 25),
  createData('ETCS-208', 'Java Programming', 30, 19),
  createData('ETCS-207', 'Operating System', 30, 17),
  createData('ETCS-148', 'Applied Chemistry', 30, 23),
  createData('ETCS-209', 'Python Programming', 30, 20),
];

const getPercentage = (totalLectures, attendedLectures) => {
  var percentage = (attendedLectures / totalLectures) * 100;
  return percentage.toFixed(2);
};

const AttendanceTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
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
              <TableCell className={classes.tableCell} align='center'>
                Lectures Held
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Lectures Attended
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Percentage
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.name}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{row.subjectCode}</TableCell>
                <TableCell align='center'>{row.subjectName}</TableCell>
                <TableCell align='center'>{row.lecturesHeld}</TableCell>
                <TableCell align='center'>{row.lecturesAttended}</TableCell>
                <TableCell align='center'>
                  {getPercentage(row.lecturesHeld, row.lecturesAttended)} %
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AttendanceTable;
