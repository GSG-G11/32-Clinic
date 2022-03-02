const supertest = require('supertest');
const app = require('./app');
const dbBuild = require('./database/config/build');
const connection = require('./database/config/connection');
const addAppointmentToDb = require('./database/queries/addAppointmentsToDb');
const getAllAppointmentsFromDB = require('./database/queries/getAllAppointmentsFromDB');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe('test database', () => {
  test('', () => {
    const expected = 'mohammed';
    return getAllAppointmentsFromDB().then((data) => {
      expect(data.rows[0].name).toEqual(expected);
    });
  });
});

describe('test routes', () => {
  test('(GET) Test endpoint (/), status code (200), content-type (html)', (done) => {
    supertest(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done();
        console.log(res.body);
        return done();
      });
  });
});
