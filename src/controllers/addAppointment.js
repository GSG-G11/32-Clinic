const addAppointmentToDb = require('../database/queries/addAppointmentsToDB');

const addAppointment = (req, res) => {
  const {
    name, age, mobile, date, time, doctors,
  } = req.body;
  addAppointmentToDb(name, age, mobile, date, time, doctors)
    .then(res.redirect('/html/add-appointment.html'))
    .catch(() => {
      res.json({ message: 'There is an Error' });
    });
};
module.exports = addAppointment;
