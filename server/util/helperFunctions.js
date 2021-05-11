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

  if (month >= 7) {
    return (year - studyingYear + 1);
  }
  else {
    return (year - studyingYear);
  }
};

module.exports = {
  generateRegistrationNumber,
  generateEnrollmentNumber,
  getJoiningYear
};
