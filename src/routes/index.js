const express = require('express');
const addAppointment = require('../controllers/addAppointment');
const getAllAppointments = require('../controllers/getAllApointments');
const getAllDoctors = require('../controllers/getAllDoctors');
const validateDoctor = require('../controllers/validateDoctor');

const router = express.Router();

router.post('/add-appointment', addAppointment);
router.get('/doctors', getAllDoctors);
router.post('/login', validateDoctor);
router.get('/appointments', getAllAppointments);

module.exports = router;
