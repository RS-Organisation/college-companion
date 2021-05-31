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

const AcademicPerformanceTable = (props) => {
  const { marksList, subjectsList } = props;
  const classes = useStyles();

  const findSubjectName = (id) => {
    return subjectsList.find(item => item._id === id);
  }

  return (
    <Paper className={classes.root}>
      {!marksList.length ? (
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
                  <TableCell align='center'>
                    {findSubjectName(marks.subject).subjectCode}
                  </TableCell>
                  <TableCell align='center'>
                    {findSubjectName(marks.subject).subjectName}
                  </TableCell>
                  <TableCell align='center'>{marks.totalMarks}</TableCell>
                  <TableCell align='center'>{marks.marks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default AcademicPerformanceTable;
