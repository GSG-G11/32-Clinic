const getDoctorNameFromDB = require('../database/queries/getDoctorNameFromDB');

const getAllDoctors = (req, res) => {
  getDoctorNameFromDB()
    .then((data) => {
      res.json({
        statusCode: 200,
        names: data.rows,
      });
    })
    .catch(() => {
      res.json({ message: 'There is an Error' });
    });
};

module.exports = getAllDoctors;
