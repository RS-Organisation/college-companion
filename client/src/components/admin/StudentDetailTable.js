import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import useStyles from '../../styles/FacultyDetailTable';

function createData(name, enrollmentNumber, email, joiningYear) {
  return { name, enrollmentNumber, email, joiningYear };
}

// this data is passed in below sorting functions
const rows = [
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
  createData('Rishabh', 'FAC2018001', 'rishabh@gmail.com', 2018),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function FacultyDetailTable() {
  const classes = useStyles();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Toolbar className={classes.toolbar}>
          <Typography
            className={classes.title}
            variant='h6'
            id='tableTitle'
            component='div'
          >
            Our Student
          </Typography>
          <Tooltip title='Filter list'>
            <IconButton aria-label='filter list'>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            size='medium'
            aria-label='enhanced table'
          >
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell>Enrollment Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Joining Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.enrollmentNumber}>
                      <TableCell align='left'>{index + 1}</TableCell>
                      <TableCell component='th' id={labelId} scope='row'>
                        {row.enrollmentNumber}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>{row.joiningYear}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
