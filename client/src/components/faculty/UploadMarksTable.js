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
  // variables
  const classes = useStyles();
  const { studentsList, marksList, setMarksList } = props;

  // handlers
  const handleChange = (e, id) => {
    const marks = e.target.value;
    const idx = marksList.findIndex(m => m.id === id);
    let newMarksList = [];

    if (idx === -1) {
      newMarksList = newMarksList.concat(marksList, { id, marks });
    }
    else {
      newMarksList = [
        ...marksList.slice(0, idx),
        Object.assign({}, marksList[idx], { marks }),
        ...marksList.slice(idx + 1)
      ];
    }

    setMarksList(newMarksList);
  }

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
                    onChange={(e) => handleChange(e, student._id)}
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
