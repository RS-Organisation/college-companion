import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  withStyles,
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
})((props) => <Checkbox color='default' {...props} />);

const MarkAttendanceTable = (props) => {
  const { studentsList, selected, setSelected } = props;
  const classes = useStyles();
  const rowCount = studentsList.length;

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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
      const newSelecteds = studentsList.map((row) => row._id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label='Student Detail Table'>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox' className={classes.tableCell}>
                <CustomCheckbox
                  indeterminate={
                    selected.length > 0 && selected.length < rowCount
                  }
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
            {studentsList.map((student, index) => {
              const isItemSelected = isSelected(student._id);
              const labelId = `attendance-table-checkbox-${student._id}`;
              return (
                <TableRow
                  hover
                  role='checkbox'
                  key={student._id}
                  onClick={(event) => handleClick(student._id)}
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
                  <TableCell align='center'>
                    {student.enrollmentNumber}
                  </TableCell>
                  <TableCell align='center'>{student.name}</TableCell>
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
