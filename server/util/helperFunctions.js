// Function to Generate Registration Number for Admin and Faculty
const generateRegistrationNumber = (prefix, joiningYear, count) => {
  const formattedCount = count.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  const registrationNumber = prefix + String(joiningYear) + formattedCount;
  return registrationNumber;
};

const generateEnrollmentNumber = (prefix, joiningYear, count) => {
  const formattedCount = count.toLocaleString('en-US', {
    minimumIntegerDigits: 3,
    useGrouping: false,
  });
  const enrollmentNumber = String(joiningYear) + prefix + formattedCount;
  return enrollmentNumber;
};

module.exports = { generateRegistrationNumber, generateEnrollmentNumber };
