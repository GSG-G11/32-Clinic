const express = require('express');
const compression = require('compression');
const { join } = require('path');
const router = require('./routes/index');
const addAppointment = require('./controllers/addAppointment');
require('env2')('.env');

const app = express();
app.set('PORT', process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);

app.post('/add-appointment', addAppointment);

module.exports = app;
