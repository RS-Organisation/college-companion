// Function to Generate Registration Number for Admin and Faculty
const generateRegistrationNumber = (prefix, joiningYear, count) => {
  const formattedCount = count.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  const registrationNumber = prefix + String(joiningYear) + formattedCount;
  return registrationNumber;
};

// Function to Generate Enrollment Number for Student
const generateEnrollmentNumber = (dep, joiningYear, count) => {
  const formattedCount = count.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  const enrollmentNumber = String(joiningYear) + dep + formattedCount;
  return enrollmentNumber;
};

// Function to find joining year from current semester
const getJoiningYear = (semester) => {
  var today = new Date();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var studyingYear = Math.ceil(semester / 2);
  return (month >= 7) ? (year - studyingYear + 1) : (year - studyingYear);
};

// Function to find current semester from joining year
const getSemester = (joiningYear) => {
  var today = new Date();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var semester = (year - joiningYear) * 2;
  return (month >= 7) ? (semester + 1) : semester;
};

module.exports = {
  generateRegistrationNumber,
  generateEnrollmentNumber,
  getJoiningYear,
  getSemester
};
