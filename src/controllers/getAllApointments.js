const getAllAppointmentsFromDB = require("../database/queries/getAllAppointmentsFromDB");

const getAllAppointments = (req, res) => {
  getAllAppointmentsFromDB()
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

module.exports = getAllAppointments;
