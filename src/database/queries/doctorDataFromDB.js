const connection = require('../config/connection');

const getDoctorDataFromDB = () => connection.query('SELECT username,password FROM doctors');

module.exports = getDoctorDataFromDB;
