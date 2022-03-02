const addAppointmentToDb = require('../database/queries/addAppointmentsToDb');

const addAppointment = (req, res) => {
  const {
    name, age, mobile, date, time,
  } = req.body;
  addAppointmentToDb(name, age, mobile, date, time)
    .then(res.redirect('/html/add-appointment.html'))
    .catch((err) => {
      console.log(err);
    });
};
module.exports = addAppointment;
