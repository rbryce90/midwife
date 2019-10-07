DROP TABLE IF EXISTS client_classes;

DROP TABLE IF EXISTS employees_certs;

DROP TABLE IF EXISTS certifications;

DROP TABLE IF EXISTS classes;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL NOT NULL UNIQUE,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    phone_number VARCHAR(10),
    username VARCHAR,
    passord VARCHAR,
    bio TEXT,
    due VARCHAR,
    last_contacted TIMESTAMP,
    title VARCHAR,
    admin BOOL
);

CREATE TABLE certifications (
    certification_id SERIAL NOT NULL UNIQUE,
    Name VARCHAR NOT NULL
);

CREATE TABLE employees_certs (
    cert_id SERIAL NOT NULL UNIQUE,
    employee INTEGER REFERENCES users (user_id) NOT NULL,
    certifications INTEGER REFERENCES certifications (certification_id) NOT NULL
);

CREATE TABLE classes (
    class_id SERIAL NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    instructor INTEGER REFERENCES users (user_id),
    start_date VARCHAR,
    end_date VARCHAR,
    start_class VARCHAR(5),
    start_am_pm VARCHAR(2),
    end_class VARCHAR(5),
    end_am_pm VARCHAR(2),
    days varchar,
    description TEXT
);

CREATE TABLE client_classes (
    cc_id SERIAL NOT NULL UNIQUE,
    customer INTEGER REFERENCES users (user_id),
    class INTEGER REFERENCES classes (class_ID)
);

INSERT INTO users (first_name, last_name, email, phone_number, bio, title)
    VALUES ('Bryce', 'Bond', 'brycerbond@gmail.com', '4093387520', 'Hello This is Bryce the BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ', 'doula'), ('Anna', 'P', 'annapev@gmail.com', '4097817843', 'Hello This is Anna the BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ', 'title'), ('Somone', 'P', 'someonep@gmail.com', '5555557843', 'Hello This is Someone the BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ', 'another title');

INSERT INTO classes (name, instructor, start_date, end_date, start_class, start_am_pm, end_class, end_am_pm, days, description)
    VALUES ('This Class', 1, '10/10/2019', '12/12/2019', '10:30', 'am', '11:30', 'am', 'mon-fri', 'Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.'), ('Another Class', 2, '12/10/2019', '02/12/2020', '12:15', 'pm', '11:30', 'am', 'mon,wed,fri', 'Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret   referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.');

INSERT INTO certifications (Name)
    VALUES ('One Cert'), ('Two Certs'), ('Three Certs');

INSERT INTO employees_certs (employee, certifications)
    VALUES (1, 2), (2, 3), (1, 1);

SELECT
    *
FROM
    classes;

SELECT
    *
FROM
    certifications;

SELECT
    *
FROM
    employees_certs;

SELECT
    *
FROM
    users;

