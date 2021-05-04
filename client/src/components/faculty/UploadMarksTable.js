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

function createData(name, enrollmentNumber, marks) {
  return { name, enrollmentNumber, marks };
}

const rows = [
  createData('Rishabh Choudhary', 'FAC2018001', 1),
  createData('Rishabh Choudhary', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 1),
  createData('Rishabh', 'FAC2018001', 2),
  createData('Rishabh', 'FAC2018001', 2),
  createData('Rishabh', 'FAC2018001', 2),
  createData('Rishabh', 'FAC2018001', 2),
  createData('Rishabh', 'FAC2018001', 3),
  createData('Rishabh', 'FAC2018001', 3),
  createData('Rishabh', 'FAC2018001', 3),
  createData('Rishabh', 'FAC2018001', 3),
  createData('Rishabh', 'FAC2018001', 3),
  createData('Rishabh', 'FAC2018001', 3),
];

const UploadMarksTable = () => {
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
                Marks
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.name}>
                <TableCell align='center'>{index + 1}</TableCell>
                <TableCell align='center'>{row.enrollmentNumber}</TableCell>
                <TableCell align='center'>{row.name}</TableCell>
                <TableCell align='center' className={classes.inputTableCell}>
                  <TextField
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='dense'
                    className={classes.marksInputTextField}
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
