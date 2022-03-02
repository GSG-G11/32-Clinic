const express = require('express');
const addAppointment = require('../controllers/addAppointment');
const getAllDoctors = require('../controllers/getAllDoctors');

const router = express.Router();

router.post('/add-appointment', addAppointment);
router.get('/doctors', getAllDoctors);
module.exports = router;
