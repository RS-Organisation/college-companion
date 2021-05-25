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
import UploadMarksTable from './UploadMarksTable';
import {
  getStudentList,
  clearStudentsList,
  uploadMarks,
} from '../../redux/actions/facultyActions';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

import { validator } from '../utils/helperFunctions';

const initialData = {
  department: '',
  section: '',
  subjectCode: '',
  examType: '',
  semester: '',
};

const UploadMarksPage = () => {
  const classes = {
    ...useStylesCommon(),
    ...useStyles(),
  };

  const dispatch = useDispatch();

  const {
    studentsList,
    subjectsList,
    searchQueryForStudents,
    uploadMarksFlag,
  } = useSelector((store) => store?.facultyReducer);

  const [details, setDetails] = useState(initialData);
  const [marksList, setMarksList] = useState([]);
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

  const handleUpload = () => {
    // should contain only required fields
    const fieldsToCheck = ['subjectCode', 'examType'];

    const flag = validator({ subjectCode: details.subjectCode }, fieldsToCheck);
    if (flag === true) {
      setErrors(null);
      const formData = {
        marksList,
        subjectCode: details.subjectCode,
        examType: details.examType,
        ...searchQueryForStudents,
      };
      dispatch(uploadMarks(formData)).then(() => handleReset());
    } else {
      setErrors(flag);
    }
  };

  return (
    <Header>
      <div className={classes.container70}>
        <Typography variant='h4' className={classes.subtitle}>
          Upload Marks
        </Typography>
        <Divider />
        {!uploadMarksFlag ? (
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
            <Button className={classes.filledButton} onClick={handleSearch}>
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
              <FormControl
                variant='outlined'
                size='medium'
                className={`${classes.root} ${classes.subjectCode}`}
                margin='dense'
                {...(errors && {
                  error: errors.examType !== '',
                  helperText: errors.examType,
                })}
              >
                <InputLabel>Exam Type</InputLabel>
                <Select
                  name='examType'
                  value={details.examType}
                  onChange={handleChangeDetails}
                  label='Exam Type'
                >
                  <MenuItem value={'internal'}>Internal</MenuItem>
                  <MenuItem value={'external'}>External</MenuItem>
                </Select>
                {errors && <FormHelperText>{errors.examType}</FormHelperText>}
              </FormControl>
              <Button
                variant='contained'
                onClick={handleReset}
                className={classes.filledButton}
              >
                Back
              </Button>
            </div>
            <UploadMarksTable
              studentsList={studentsList}
              marksList={marksList}
              setMarksList={setMarksList}
            />
            <div className={classes.buttonDiv}>
              <Button
                variant='contained'
                className={`${classes.filledButton} ${classes.submitButton}`}
                onClick={handleUpload}
                disabled={marksList.length === 0}
              >
                Upload
              </Button>
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default UploadMarksPage;
