import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import useStyles from '../../styles/FacultyDetailTable';

function createData(name, registrationNumber, email, joiningYear) {
  return { name, registrationNumber, email, joiningYear };
}

const rows = [
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
];

const FacultyDetailTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="Faculty Detail Table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">
                Sr. No.
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Registration Number
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Name
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Email Address
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Joining Year
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.name}>
                <TableCell align="center">{index}</TableCell>
                <TableCell align="center">{row.registrationNumber}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.joiningYear}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default FacultyDetailTable;
