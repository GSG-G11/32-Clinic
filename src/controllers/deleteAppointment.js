const deleteAppointmentFromDB = require('../database/queries/deleteAppointmentFromDB');

const deleteAppointment = (req, res) => {
  const { id } = req.params;
  deleteAppointmentFromDB(id).then(() => {
    res.json({ result: 'Deleted' });
    res.end();
  });
};

module.exports = deleteAppointment;
