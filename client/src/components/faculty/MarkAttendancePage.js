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
import { validator } from '../utils/helperFunctions';
import { departments, sections, semesters } from '../utils/defaultValues';

import SubmitLoader from '../utils/SubmitLoader';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

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

  const [loading, setLoading] = useState(false);
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
    const requiredFields = ['department', 'section', 'semester'];
    const flag = validator(details, requiredFields);
    if (flag === true) {
      setErrors(null);
      const searchedQuery = {
        department: details.department,
        section: details.section,
        semester: details.semester,
      };
      setLoading(true);
      dispatch(getStudentList(searchedQuery)).then(() => setLoading(false));
    } else {
      setErrors(flag);
    }
  };

  const handleReset = () => {
    dispatch(clearStudentsList());
    setDetails(initialData);
  };

  const handleSubmit = () => {
    const requiredFields = ['subjectCode'];
    const flag = validator(
      { subjectCode: details.subjectCode },
      requiredFields
    );
    if (flag === true) {
      setErrors(null);
      const formData = {
        allStudents: studentsList,
        selectedStudents: selected,
        subjectCode: details.subjectCode,
        ...searchQueryForStudents,
      };
      setLoading(true);
      dispatch(markAttendance(formData)).then(() => {
        setLoading(false);
        handleReset();
      });
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
                {Object.entries(departments).map(([key, value]) => (
                  <MenuItem value={key}>{value}</MenuItem>
                ))}
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
                {sections.map((section) => (
                  <MenuItem value={section}>{section}</MenuItem>
                ))}
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
                {semesters.map((semester) => (
                  <MenuItem value={semester}>{semester}</MenuItem>
                ))}
              </Select>
              {errors && <FormHelperText>{errors.semester}</FormHelperText>}
            </FormControl>
            {loading ? (
              <SubmitLoader />
            ) : (
              <Button
                variant='contained'
                className={classes.filledButton}
                onClick={handleSearch}
              >
                Search
              </Button>
            )}
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
              {loading ? (
                <SubmitLoader />
              ) : (
                <Button
                  variant='contained'
                  className={`${classes.filledButton} ${classes.submitButton}`}
                  onClick={handleSubmit}
                  disabled={selected.length === 0}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default MarkAttendancePage;
