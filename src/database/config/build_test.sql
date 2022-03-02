BEGIN;
DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS doctors CASCADE;
CREATE TABLE doctors (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  gender VARCHAR(50) NOT NULL,
  mobile VARCHAR(18) NOT NULL,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(15) NOT NULL
);
CREATE TABLE appointments (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  mobile VARCHAR(18) NOT NULL,
  date VARCHAR NOT NULL,
  time VARCHAR NOT NULL,
  doctor_id INT,
  FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

INSERT INTO doctors(name, gender, mobile, username, password)
VALUES(
    'Salma',
    'female',
    '0511223344',
    'salma',
    '56686'
  );
INSERT INTO doctors(name, gender, mobile, username, password)
VALUES(
    'Khalid',
    'male',
    '5684233694',
    'khalid',
    '14565'
  );
INSERT INTO appointments (name, age, mobile, date, time, doctor_id)
VALUES (
    'mohammed',
    22,
    '313131331',
    '2022-04-01',
    '12:29:00',
    (
      SELECT id
      FROM doctors
      where name = 'Salma'
    )
  );
COMMIT;