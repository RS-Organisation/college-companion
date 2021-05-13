import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import Header from './Header';
import MarkAttendanceTable from './MarkAttendanceTable';
import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

// Actions
import {
  getStudentList,
  clearStudentsList,
  markAttendance,
} from '../../redux/actions/facultyActions';

const initialData = {
  department: '',
  section: '',
  semester: '',
  subjectCode: '',
};

const MarkAttendancePage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const {
    studentsList,
    subjectsList,
    searchQueryForStudents,
    markAttendanceFlag,
  } = useSelector((store) => store?.facultyReducer);

  const [details, setDetails] = useState(initialData);
  const [selected, setSelected] = useState([]);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
  };

  const handleSearch = () => {
    if (details.department && details.section && details.semester) {
      const searchedQuery = {
        department: details.department,
        section: details.section,
        semester: details.semester,
      };
      dispatch(getStudentList(searchedQuery));
    }
  };

  const handleReset = () => {
    dispatch(clearStudentsList());
    setDetails(initialData);
  };

  const handleSubmit = () => {
    if (details.subjectCode) {
      const formData = {
        allStudents: studentsList,
        selectedStudents: selected,
        subjectCode: details.subjectCode,
        ...searchQueryForStudents,
      };
      dispatch(markAttendance(formData)).then(() => handleReset());
    } else {
      console.log('select subject code');
    }
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          Mark Attendance
        </Typography>
        <Divider />
        {!markAttendanceFlag ? (
          <form className={classes.form35}>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
            >
              <InputLabel>Department</InputLabel>
              <Select
                name='department'
                value={details.department}
                onChange={handleChangeDetails}
                label='Department'
              >
                <MenuItem value={'CS'}>CSE</MenuItem>
                <MenuItem value={'IT'}>IT</MenuItem>
                <MenuItem value={'EC'}>ECE</MenuItem>
                <MenuItem value={'EE'}>EEE</MenuItem>
                <MenuItem value={'ME'}>ME</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
            >
              <InputLabel>Section</InputLabel>
              <Select
                name='section'
                value={details.section}
                onChange={handleChangeDetails}
                label='Section'
              >
                <MenuItem value={'1'}>1</MenuItem>
                <MenuItem value={'2'}>2</MenuItem>
                <MenuItem value={'3'}>3</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
            >
              <InputLabel>Semester</InputLabel>
              <Select
                name='semester'
                value={details.semester}
                onChange={handleChangeDetails}
                label='Semester'
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant='contained'
              className={classes.filledButton}
              onClick={handleSearch}
            >
              Search
            </Button>
          </form>
        ) : (
          <div>
            <div className={classes.flexRow}>
              <FormControl
                variant='outlined'
                size='medium'
                className={`${classes.root} ${classes.subjectCode}`}
                margin='dense'
              >
                <InputLabel>Subject Code</InputLabel>
                <Select
                  name='subjectCode'
                  value={details.subjectCode}
                  onChange={handleChangeDetails}
                  label='Subject Code'
                >
                  {subjectsList.map((subject) => (
                    <MenuItem
                      key={subject.subjectCode}
                      value={subject.subjectCode}
                    >
                      {subject.subjectName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant='contained'
                className={classes.filledButton}
                onClick={handleReset}
              >
                Back
              </Button>
            </div>
            <MarkAttendanceTable
              studentsList={studentsList}
              selected={selected}
              setSelected={setSelected}
            />
            <div className={classes.buttonDiv}>
              <Button
                variant='contained'
                className={`${classes.filledButton} ${classes.submitButton}`}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default MarkAttendancePage;
