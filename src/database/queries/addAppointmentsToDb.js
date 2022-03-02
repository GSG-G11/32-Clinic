const connection = require('../config/connection');

const addAppointmentToDb = (name, age, mobile, date, time) => connection.query({
  text: `INSERT INTO appointments (name, age, mobile, date, time) 
        VALUES ($1,$2,$3,$4,$5) `,
  values: [name, age, mobile, date, time],
});

module.exports = addAppointmentToDb;
