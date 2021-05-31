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

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import useStyles from '../../styles/MarkAttendanceTable';

const findSubjectName = (id, subjects) => {
  return subjects.find(item => item._id === id);
}

const getPercentage = (totalLectures, attendedLectures) => {
  var percentage = (attendedLectures / totalLectures) * 100;
  return percentage.toFixed(2);
};

const AttendanceTable = (props) => {
  const { attendance, subjects } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {!attendance.length ? (
        <div className={classes.noDataDiv}>
          <SentimentVeryDissatisfiedIcon className={classes.noDataIcon} />
          <h2 className={classes.noDataHeading}>Oops!</h2>
          <p className={classes.noDataText}>No Data Found</p>
        </div>
      ) : (
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
              {attendance.map((row, index) => (
                <TableRow hover key={row._id}>
                  <TableCell align='center'>{index + 1}</TableCell>
                  <TableCell align='center'>
                    {findSubjectName(row.subject, subjects).subjectCode}
                  </TableCell>
                  <TableCell align='center'>
                    {findSubjectName(row.subject, subjects).subjectName}
                  </TableCell>
                  <TableCell align='center'>{row.totalLecturesHeld}</TableCell>
                  <TableCell align='center'>{row.lecturesAttended}</TableCell>
                  <TableCell align='center'>
                    {getPercentage(row.totalLecturesHeld, row.lecturesAttended)} %
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default AttendanceTable;
