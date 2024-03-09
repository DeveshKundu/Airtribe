-- Database: airtribe

-- DROP DATABASE IF EXISTS airtribe;

-- CREATE DATABASE airtribe
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_India.1252'
--     LC_CTYPE = 'English_India.1252'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- DROP TABLE instructors;

CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    linkedin_profile VARCHAR(255) NOT NULL
);

CREATE TABLE learners (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    linkedin_profile VARCHAR(255) NOT NULL
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    max_seats INT NOT NULL,
    start_date DATE NOT NULL,
    instructor_id INT,
    FOREIGN KEY (instructor_id) REFERENCES instructors(id)
);

CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    course_id INT,
    learner_id INT,
    status VARCHAR(20),
    FOREIGN KEY (course_id) REFERENCES courses(id),
    FOREIGN KEY (learner_id) REFERENCES learners(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    lead_id INT,
    comment_text TEXT,
    FOREIGN KEY (lead_id) REFERENCES leads(id)
);