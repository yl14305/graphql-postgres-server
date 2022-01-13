CREATE TABLE students(
	Number serial PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    phonenumber VARCHAR(255),
    recorded_datetime TIMESTAMP
);

INSERT INTO students (firstname, lastname, phonenumber, recorded_datetime)
VALUES ('Yean Loong', 'Lim', +6738999989, current_timestamp)