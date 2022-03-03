const express = require('express');
const {
  getAllAppointments,
  addAppointment,
  deleteAppointment,
  getAllDoctors,
  validateDoctor,
} = require('../controllers');

const router = express.Router();

router.post('/add-appointment', addAppointment);
router.get('/doctors', getAllDoctors);
router.post('/login', validateDoctor);
router.get('/appointments', getAllAppointments);
router.delete('/appointments/:id', deleteAppointment);

module.exports = router;
