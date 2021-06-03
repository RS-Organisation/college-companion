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
import { validator } from '../utils/helperFunctions';
import {
  departments,
  semesters,
  sections,
  examTypes,
} from '../utils/defaultValues';

import SubmitLoader from '../utils/SubmitLoader';

import useStyles from '../../styles/MarkAttendancePage';
import useStylesCommon from '../../styles/CommonStyles';

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

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(initialData);
  const [marksList, setMarksList] = useState([]);
  const [errors, setErrors] = useState(null);
  const [errorMarks, setErrorMarks] = useState([]);
  const [errorText, setErrorText] = useState(false);

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

  const handleUpload = () => {
    const requiredFields = ['subjectCode', 'examType'];
    const flag = validator(
      { subjectCode: details.subjectCode, examType: details.examType },
      requiredFields
    );
    if (flag === true) {
      setErrors(null);

      if (marksList.length === studentsList.length && errorMarks.length === 0) {
        setErrorText(false);
        const formData = {
          marksList,
          subjectCode: details.subjectCode,
          examType: details.examType,
          ...searchQueryForStudents,
        };
        setLoading(true);
        dispatch(uploadMarks(formData)).then(() => {
          setLoading(false);
          handleReset();
        });
      } else {
        setErrorText(true);
      }
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
              <Button className={classes.filledButton} onClick={handleSearch}>
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
                  {examTypes.map((examType) => (
                    <MenuItem value={examType}>{examType}</MenuItem>
                  ))}
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
            {errorText && (
              <Typography
                variant='h6'
                color='error'
                style={{ fontSize: '15px' }}
                align='center'
              >
                {errorMarks.length !== 0
                  ? 'Please enter correct marks'
                  : 'Please fill marks for all students'}
              </Typography>
            )}
            <UploadMarksTable
              studentsList={studentsList}
              marksList={marksList}
              setMarksList={setMarksList}
              examType={details.examType}
              errorMarks={errorMarks}
              setErrorMarks={setErrorMarks}
            />
            <div className={classes.buttonDiv}>
              {loading ? (
                <SubmitLoader />
              ) : (
                <Button
                  variant='contained'
                  className={`${classes.filledButton} ${classes.submitButton}`}
                  onClick={handleUpload}
                  disabled={marksList.length === 0}
                >
                  Upload
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </Header>
  );
};

export default UploadMarksPage;
