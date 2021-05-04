import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  withStyles
} from '@material-ui/core';
import useStyles from '../../styles/MarkAttendanceTable';

const CustomCheckbox = withStyles({
  root: {
    color: 'white',
    '&$checked': {
      color: 'white',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function createData(name, enrollmentNumber) {
  return { name, enrollmentNumber };
}

const rows = [
  createData('Rishabh', 'FAC2018000'),
  createData('Rishabh', 'FAC2018001'),
  createData('Rishabh', 'FAC2018002'),
  createData('Rishabh', 'FAC2018003'),
  createData('Rishabh', 'FAC2018004'),
  createData('Rishabh', 'FAC2018005'),
  createData('Rishabh', 'FAC2018006'),
  createData('Rishabh', 'FAC2018007'),
  createData('Rishabh', 'FAC2018008'),
  createData('Rishabh', 'FAC2018009'),
  createData('Rishabh', 'FAC2018010'),
  createData('Rishabh', 'FAC2018011'),
  createData('Rishabh', 'FAC2018012'),
  createData('Rishabh', 'FAC2018013'),
  createData('Rishabh', 'FAC2018014'),
  createData('Rishabh', 'FAC2018015'),
  createData('Rishabh', 'FAC2018016'),
];

const MarkAttendanceTable = () => {
  const classes = useStyles();
  const rowCount = rows.length;
  const [selected, setSelected] = useState([]);

  const handleClick = (enrollmentNumber) => {
    const selectedIndex = selected.indexOf(enrollmentNumber);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, enrollmentNumber);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.enrollmentNumber);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = (enrollmentNumber) => (
    selected.indexOf(enrollmentNumber) !== -1
  );

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label='Student Detail Table'>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox' className={classes.tableCell}>
                <CustomCheckbox
                  indeterminate={selected.length > 0 && selected.length < rowCount}
                  checked={rowCount > 0 && selected.length === rowCount}
                  onChange={handleSelectAllClick}
                  inputProps={{ 'aria-label': 'select all students' }}
                />
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Enrollment Number
              </TableCell>
              <TableCell className={classes.tableCell} align='center'>
                Student Name
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const isItemSelected = isSelected(row.enrollmentNumber);
              const labelId = `attendance-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  role='checkbox'
                  key={row.enrollmentNumber}
                  onClick={(event) => handleClick(row.enrollmentNumber)}
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  selected={isItemSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell align='center'>{row.enrollmentNumber}</TableCell>
                  <TableCell align='center'>{row.name}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MarkAttendanceTable;