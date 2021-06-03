import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@material-ui/core';

import useStyles from '../../styles/MarkAttendanceTable';

const UploadMarksTable = (props) => {
  const {
    studentsList,
    marksList,
    setMarksList,
    examType,
    errorMarks,
    setErrorMarks,
  } = props;
  const classes = useStyles();

  const maxMarks = examType === 'Internal' ? 25 : 75;

  const getNewArray = (index) => {
    const isPresent = errorMarks.indexOf(index);
    let newArray = [];

    if (isPresent === -1) {
      return errorMarks;
    } else if (isPresent === 0) {
      newArray = newArray.concat(errorMarks.slice(1));
    } else if (isPresent === errorMarks.length - 1) {
      newArray = newArray.concat(errorMarks.slice(0, -1));
    } else if (isPresent > 0) {
      newArray = newArray.concat(
        errorMarks.slice(0, isPresent),
        errorMarks.slice(isPresent + 1)
      );
    }
    return newArray;
  };

  const handleChange = (e, id, index) => {
    const marks = e.target.value;
    if (marks >= 0 && marks <= maxMarks) {
      let newArray = getNewArray(index);
      setErrorMarks(newArray);
      const idx = marksList.findIndex((m) => m.id === id);
      let newMarksList = [];

      if (idx === -1) {
        newMarksList = newMarksList.concat(marksList, { id, marks });
      } else {
        newMarksList = [
          ...marksList.slice(0, idx),
          Object.assign({}, marksList[idx], { marks }),
          ...marksList.slice(idx + 1),
        ];
      }
      setMarksList(newMarksList);
    } else {
      setErrorMarks([...errorMarks, index]);
    }
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
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
                Marks
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student, index) => (
              <TableRow hover key={index}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{student.enrollmentNumber}</TableCell>
                <TableCell align='center'>{student.name}</TableCell>
                <TableCell align='center' className={classes.inputTableCell}>
                  <TextField
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='dense'
                    className={classes.marksInputTextField}
                    onChange={(e) => handleChange(e, student._id, index)}
                    error={errorMarks.includes(index)}
                    helperText={
                      errorMarks.includes(index)
                        ? `Marks should be in range (0-${maxMarks})`
                        : ''
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UploadMarksTable;
