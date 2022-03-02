const connection = require('../config/connection');

const getDoctorDataFromDB = (name) => connection.query({
  text: 'DELETE FROM appointments WHERE name=$1',
  values: [name],
});
module.exports = getDoctorDataFromDB;
