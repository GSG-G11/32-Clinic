const addAppointment = require('./addAppointment');
const deleteAppointment = require('./deleteAppointment');
const { pageNotFoundError, serverError } = require('./error');
const getAllAppointments = require('./getAllApointments');
const getAllDoctors = require('./getAllDoctors');
const validateDoctor = require('./validateDoctor');

module.exports = {
  addAppointment,
  deleteAppointment,
  getAllAppointments,
  getAllDoctors,
  validateDoctor,
  pageNotFoundError,
  serverError,
};
