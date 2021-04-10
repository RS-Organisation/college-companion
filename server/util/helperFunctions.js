// Function to Generate Registration Number for Admin
const generateRegistrationNumber = (prefix, joiningYear, count) => {
    var registrationNumber = '';
    if (count < 10) {
        registrationNumber = prefix + '00' + String(count) + String(joiningYear);
    } else if (count < 100) {
        registrationNumber = prefix + '0' + String(count) + String(joiningYear);
    } else {
        registrationNumber = prefix + String(count) + String(joiningYear);
    }
    return registrationNumber;
};

module.exports = { generateRegistrationNumber };