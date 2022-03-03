const connection = require('../config/connection');

const addAppointmentToDb = (name, age, mobile, date, time, drName) => connection.query({
  text: `INSERT INTO appointments (name, age, mobile, date, time, doctor_id) 
        VALUES ($1, $2, $3, $4, $5, (SELECT id FROM doctors where name = $6));`,
  values: [name, age, mobile, date, time, drName],
});

module.exports = addAppointmentToDb;
