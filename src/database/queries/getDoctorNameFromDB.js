const connection = require('../config/connection');

const getDoctorNameFromDB = () => connection.query('SELECT name FROM doctors');

module.exports = getDoctorNameFromDB;
