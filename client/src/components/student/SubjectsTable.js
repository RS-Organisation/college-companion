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

import { useSelector } from 'react-redux';

const SubjectsTable = () => {
  const classes = useStyles();
  const { subjectsList } = useSelector((store) => store.studentReducer);
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
            {subjectsList.map((subject, index) => (
              <TableRow hover key={subject._id}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{subject.subjectCode}</TableCell>
                <TableCell align='center'>{subject.subjectName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default SubjectsTable;
