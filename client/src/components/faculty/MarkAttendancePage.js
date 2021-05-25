import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

import Header from './Header';
import MarkAttendanceTable from './MarkAttendanceTable';
import {
  getStudentList,
  clearStudentsList,
  markAttendance,
} from '../../redux/actions/facultyActions';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

import { validator } from '../utils/helperFunctions';

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
  const [errors, setErrors] = useState(null);

  const handleChangeDetails = (e) => {
    const { name } = e.target;
    setDetails({ ...details, [name]: e.target.value });
    if (errors) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSearch = () => {
    // should contain only required fields
    const fieldsToCheck = ['department', 'section', 'semester'];
    const flag = validator(details, fieldsToCheck);
    if (flag === true) {
      const searchedQuery = {
        department: details.department,
        section: details.section,
        semester: details.semester,
      };
      dispatch(getStudentList(searchedQuery));
      setErrors(null);
    } else {
      setErrors(flag);
    }
  };

  const handleReset = () => {
    dispatch(clearStudentsList());
    setDetails(initialData);
  };

  const handleSubmit = () => {
    // should contain only required fields
    const fieldsToCheck = ['subjectCode'];

    const flag = validator({ subjectCode: details.subjectCode }, fieldsToCheck);
    if (flag === true) {
      setErrors(null);
      const formData = {
        allStudents: studentsList,
        selectedStudents: selected,
        subjectCode: details.subjectCode,
        ...searchQueryForStudents,
      };
      dispatch(markAttendance(formData)).then(() => handleReset());
    } else {
      setErrors(flag);
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
              {...(errors && {
                error: errors.department !== '',
                helperText: errors.department,
              })}
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
              {errors && <FormHelperText>{errors.department}</FormHelperText>}
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
              {...(errors && {
                error: errors.section !== '',
                helperText: errors.section,
              })}
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
              {errors && <FormHelperText>{errors.section}</FormHelperText>}
            </FormControl>
            <FormControl
              variant='outlined'
              size='small'
              className={classes.root}
              {...(errors && {
                error: errors.semester !== '',
                helperText: errors.semester,
              })}
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
              {errors && <FormHelperText>{errors.semester}</FormHelperText>}
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
                {...(errors && {
                  error: errors.subjectCode !== '',
                  helperText: errors.subjectCode,
                })}
              >
                <InputLabel>Subject</InputLabel>
                <Select
                  name='subjectCode'
                  value={details.subjectCode}
                  onChange={handleChangeDetails}
                  label='Subject'
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
                {errors && (
                  <FormHelperText>{errors.subjectCode}</FormHelperText>
                )}
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
                disabled={selected.length === 0}
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
