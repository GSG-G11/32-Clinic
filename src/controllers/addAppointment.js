const addAppointmentToDb = require('../database/queries/addAppointmentsToDb');

const addAppointment = (req, res) => {
  const { name, age, mobile, date, time, doctors} = req.body;
  addAppointmentToDb(name, age, mobile, date, time, doctors)
    .then(res.redirect('/html/add-appointment.html'))
    .catch((err) => {
      res.json({ message: 'There is an Error' });
    });
};
module.exports = addAppointment;
