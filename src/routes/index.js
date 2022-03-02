const express = require('express');
const addAppointment = require('../controllers/addAppointment');
const getAllDoctors = require('../controllers/getAllDoctors');
const getDoctorDataFromDB = require('../database/queries/doctorDataFromDb');

const router = express.Router();

router.post('/add-appointment', addAppointment);
router.get('/doctors', getAllDoctors);
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log({ username, password });
  getDoctorDataFromDB()
    .then((data) => {
      const filteredResult = data.rows.filter(
        (element) => element.username === username && element.password === password,
      );
      if (filteredResult.length > 0) {
        res.json({ message: 'sucess' });
      } else {
        res.json({ message: 'user name wrong' });
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
