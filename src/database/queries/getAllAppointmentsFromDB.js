const connection = require('../config/connection');

const getAllAppointmentsFromDB = () => connection.query('SELECT id, name, age, date, time, mobile FROM appointments');

module.exports = getAllAppointmentsFromDB;
