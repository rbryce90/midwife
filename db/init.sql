DROP TABLE IF EXISTS Customers_classes;

DROP TABLE IF EXISTS Employees_Certs;

DROP TABLE IF EXISTS Classes;

DROP TABLE IF EXISTS Customers;

DROP TABLE IF EXISTS Employees;

DROP TABLE IF EXISTS Certifications;

CREATE TABLE Employees (
    Employee_ID SERIAL NOT NULL UNIQUE,
    full_name VARCHAR NOT NULL,
    email VARCHAR,
    phone_number VARCHAR(10),
    bio TEXT,
    title varchar
);

CREATE TABLE Customers (
    Customer_ID SERIAL NOT NULL UNIQUE,
    full_name VARCHAR NOT NULL,
    email VARCHAR,
    phone_number VARCHAR,
    due VARCHAR,
    last_contacted TIMESTAMP
);

CREATE TABLE Certifications (
    Certifications_ID SERIAL NOT NULL UNIQUE,
    Name VARCHAR NOT NULL
);

CREATE TABLE Employees_Certs (
    Employees_ID SERIAL NOT NULL UNIQUE,
    employees INTEGER REFERENCES Employees (Employee_ID) NOT NULL,
    certifications INTEGER REFERENCES Certifications (Certifications_ID) NOT NULL
);

CREATE TABLE Classes (
    Classes_ID SERIAL NOT NULL UNIQUE,
    name VARCHAR NOT NULL,
    instructor INTEGER REFERENCES Employees (Employee_ID),
    start_date VARCHAR,
    end_date VARCHAR,
    begin_time VARCHAR( 10),
    hours VARCHAR( 10),
    description TEXT);

CREATE TABLE Customers_classes (
    CC_id SERIAL NOT NULL UNIQUE,
    customer INTEGER REFERENCES Customers (Customer_ID),
    class INTEGER REFERENCES Classes (Classes_ID)
);

INSERT INTO Employees (full_name, email, phone_number, bio, title)
    VALUES ('Bryce Bond', 'brycerbond@gmail.com', '4093387520', 'Hello This is Bryce the BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ', 'doula'), ('Anna P', 'annapev@gmail.com', '4097817843', 'Hello This is Anna the BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ', 'title'), ('Somone P', 'someonep@gmail.com', '5555557843', 'Hello This is Someone the BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH BLAH ', 'another title');

INSERT INTO Customers (full_name, email, phone_number, due)
    VALUES ('Girl Name', 'girlsemail@email.com', '123456789', '10/12/2020'), ('Another Name', 'anothername@email.com', '123456789', '1/12/2020'), ('The Name', 'thename@email.com', '123456789', '2/20/2020'), ('Dream Girl', 'dreamgirl@email.com', '123456789', '3/10/2020');

INSERT INTO Classes (name, instructor, start_date, end_date, begin_time, hours, description)
    VALUES ('This Class', 1, '10/10/2019', '12/12/2019', '10:30am', 2, ' Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
             alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
             referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
             electram, eos choro alterum definiebas in. Vim dolorum definiebas
             an. Mei ex natum rebum iisque.'), ('Another Class', 2, '12/10/2019', '02/12/2020', '12:15pm', 4, ' Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
             alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
             referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
             electram, eos choro alterum definiebas in. Vim dolorum definiebas
             an. Mei ex natum rebum iisque.');

INSERT INTO Certifications (Name)
    VALUES ('One Cert'), ('Two Certs'), ('Three Certs');

INSERT INTO Customers_classes (customer, class)
    VALUES (1, 2), (2, 1);

INSERT INTO Employees_Certs (employees, certifications)
    VALUES (1, 2), (2, 3), (1, 1);

SELECT
    *
FROM
    Customers;

SELECT
    *
FROM
    Employees;

SELECT
    *
FROM
    Classes;

SELECT
    *
FROM
    Certifications;

SELECT
    *
FROM
    Customers_classes;

SELECT
    *
FROM
    Employees_Certs;

