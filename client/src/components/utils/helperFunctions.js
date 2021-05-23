import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

const checkContactNumber = (num) => {
  return num.length === 0 || /^[6-9]\d{9}$/.test(num)
    ? ''
    : 'Invalid contact number (numbers only)';
};

export const validator = (details, fieldsToCheck) => {
  let temp = {};
  // temp.name = details.name ? '' : 'Name is required';
  // temp.dob = details.dob ? '' : 'Date of birth is required';
  // temp.email = details.email ? '' : 'Email is required';
  // temp.joiningYear = details.joiningYear ? '' : 'Joining year is required';
  // temp.designation = details.designation ? '' : 'Designation is required';
  // temp.department = details.department ? '' : 'Department is required';

  fieldsToCheck.map((field) => {
    // email is correct or not
    if (field === 'email' && !isEmail(details[field])) {
      temp[field] = details[field] ? 'Invalid email' : 'Field is required';
    }
    // Joining Year is correct or not
    else if (field === 'joiningYear') {
      if (!isNumeric(details[field], { no_symbols: true })) {
        temp[field] = details[field]
          ? 'Invalid Joining Year'
          : 'Field is required';
      } else {
        temp[field] =
          parseInt(details[field]) > 1946 &&
          parseInt(details[field]) <= new Date().getFullYear()
            ? ''
            : `Year should be in (1947-${new Date().getFullYear()})`;
      }
    } else {
      temp[field] = details[field] ? '' : 'Field is required';
    }
    return temp;
  });

  // since below fields are not required so we have check them separately only when they are available
  if (details?.contactNumber) {
    temp.contactNumber = checkContactNumber(details.contactNumber);
  } else {
    temp.contactNumber = '';
  }

  if (details?.fatherContactNumber) {
    temp.fatherContactNumber = checkContactNumber(details.fatherContactNumber);
  } else {
    temp.fatherContactNumber = '';
  }

  if (details?.aadharCardNumber) {
    temp.aadharCardNumber =
      (details?.aadharCardNumber && details?.aadharCardNumber?.length === 0) ||
      /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(
        details.aadharCardNumber
      )
        ? ''
        : 'Invalid aadhar number (12-digits)';
  } else {
    temp.aadharCardNumber = '';
  }

  const flag = Object.values(temp).every((x) => x === '' || x === null);

  if (flag) {
    return true;
  } else {
    return { ...temp };
  }
};
