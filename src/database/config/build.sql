BEGIN;

DROP TABLE IF EXISTS appointments, doctors CASCADE;

CREATE TABLE appointments (
  id SERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  mobile INT NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL
  -- doctor_id INT REFERENCES doctors(id)
);


COMMIT;