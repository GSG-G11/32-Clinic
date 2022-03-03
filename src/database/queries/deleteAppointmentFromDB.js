const connection = require('../config/connection');

const deleteAppointmentFromDb = (id) => connection.query({
  text: 'DELETE FROM appointments WHERE id=$1',
  values: [id],
});

module.exports = deleteAppointmentFromDb;