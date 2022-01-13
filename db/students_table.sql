CREATE TABLE students(
	Number serial PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    phonenumber VARCHAR(255),
    recorded_datetime TIMESTAMP
);

INSERT INTO students (firstname, lastname, phonenumber, recorded_datetime)
VALUES ('Dwayne', 'Johnson', +111111111, current_timestamp)