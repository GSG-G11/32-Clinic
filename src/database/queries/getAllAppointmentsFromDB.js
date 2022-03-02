const connection = require('./../config/connection');

const getAllAppointmentsFromDB = () => connection.query('SELECT name, age, date, time, mobile FROM appointments');

module.exports = getAllAppointmentsFromDB;
