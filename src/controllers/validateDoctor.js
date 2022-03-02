const getDoctorDataFromDB = require('../database/queries/doctorDataFromDb');

const validateDoctor = (req, res) => {
  const { username, password } = req.body;
  getDoctorDataFromDB()
    .then((data) => {
      const filteredResult = data.rows.filter(
        (element) =>
          element.username === username && element.password === password,
      );
      if (filteredResult.length > 0) {
        res.json({ message: 'success' });
      } else {
        res.json({ message: 'user name wrong' });
      }
    })
    .catch((err) => {
      res.json({ message: 'There is an Error' });
    });
    
};
module.exports = validateDoctor;
