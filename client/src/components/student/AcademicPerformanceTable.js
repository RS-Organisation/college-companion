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

// function createData(subjectCode, subjectName, marks) {
//   return { subjectCode, subjectName, marks };
// }

// const rows = [
//   createData('ETCS-206', 'Circuit and Systems', 65),
//   createData('ETCS-144', 'Applied Chemistry', 57),
//   createData('ETCS-205', 'Python Programming', 71),
//   createData('ETCS-106', 'Fundamental of Computation', 69),
//   createData('ETCS-141', 'Applied Physics', 51),
//   createData('ETCS-208', 'Java Programming', 49),
// ];

const AcademicPerformanceTable = (props) => {
  const classes = useStyles();
  const { marksList, subjectsList } = props;

  const findSubjectName = (id) => {
    return subjectsList.find(item => item._id === id);
  }

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
              <TableCell className={classes.tableCell} align='center'>
                Total Marks
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Marks Obtained
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {marksList.map((marks, index) => (
              <TableRow hover key={marks._id}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{findSubjectName(marks.subject).subjectCode}</TableCell>
                <TableCell align='center'>{findSubjectName(marks.subject).subjectName}</TableCell>
                <TableCell align='center'>{marks.totalMarks}</TableCell>
                <TableCell align='center'>{marks.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AcademicPerformanceTable;
