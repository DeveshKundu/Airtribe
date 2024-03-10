const express = require('express');
const pool = require('./database/conn');

const app = express();
const port = 3000;

app.use(express.json());

// start the server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// list all the courses
app.get("/courses", async (req, res) => {
    try {
        const courses = await pool.query(`SELECT * FROM courses`);
        res.status(200).send(courses.rows);
    } catch (error) {
        res.status(400).send(error);
    }
});

// create a course
app.post("/courses", async (req, res) => {
    const { name, max_seats, start_date, instructor_id } = req.body;
    // validation
    if (typeof name !== 'string' || name.length < 3) {
        return res.status(400).send(
            `Name must be a string of at least 3 characters long.`
        );
    }
    if (!Number.isInteger(max_seats) || max_seats <= 0) {
        return res.status(400).send(`Max seats must be a positive integer.`);
    }
    if (!Date.parse(start_date)) {
        return res.status(400).send(`Start date must be a valid date.`);
    }
    if (!Number.isInteger(instructor_id) || instructor_id <= 0) {
        return res.status(400).send(`Instructor ID must be a positive integer.`);
    }

    try {
        await pool.query(
            `INSERT INTO courses (name, max_seats, start_date, instructor_id) VALUES ($1, $2, $3, $4)`, [name, max_seats, start_date, instructor_id]
        );
        res.status(201).send(`Course created Successfully!`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// update the course details by instructor
app.put("/courses/:courseId", async (req, res) => {
    const { name, max_seats, start_date, instructor_id } = req.body;
    // validation
    if (typeof name !== 'string' || name.length < 3) {
        return res.status(400).send('Name must be a string at least 3 characters long.');
    }
    if (!Number.isInteger(max_seats) || max_seats <= 0) {
        return res.status(400).send('Max seats must be a positive integer.');
    }
    if (!Date.parse(start_date)) {
        return res.status(400).send('Start date must be a valid date.');
    }
    if (!Number.isInteger(instructor_id) || instructor_id <= 0) {
        return res.status(400).send('Instructor ID must be a positive integer.');
    }

    try {
        await pool.query(
            `UPDATE courses SET name = $1, max_seats = $2, start_date = $3, instructor_id = $4 WHERE id = $5`, [name, max_seats, start_date, instructor_id, req.params.courseId]
        );
        res.status(201).send(`Course details updated Successfully!`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// register for a course by learner
app.post("/courses/:courseId/learners", async (req, res) => {
    const { name, email, phone_number, linkedin_profile } = req.body;
    // validate
    if (typeof name !== 'string' || name.length < 5) {
        return res.status(400).send('Name must be a string at least 5 characters long.');
    }
    if (typeof email !== 'string' || !email.endsWith('@gmail.com')) {
        return res.status(400).send('Email must be a valid email address.');
    }
    if (typeof phone_number !== 'string' || phone_number.length < 10) {
        return res.status(400).send('Phone number must be a valid phone number.');
    }
    if (typeof linkedin_profile !== 'string' || !linkedin_profile.startsWith('https://www.linkedin.com/')) {
        return res.status(400).send('LinkedIn profile must be a valid LinkedIn URL.');
    }

    try {
        await pool.query(
            `INSERT INTO learners (name, email, phone_number, linkedin_profile, course_id) VALUES ($1, $2, $3, $4, $5)`, [name, email, phone_number, linkedin_profile, req.params.courseId]
        );
        const course = await pool.query(
            `SELECT NAME FROM courses WHERE id = $1`, [req.params.courseId]
        );
        res.status(201).send(`You are registered for ${course.rows[0].name}.`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// update a lead with their status by instructor
app.patch("/learners/:learnerId", async (req, res) => {
    const { status } = req.body;
    // validation
    if (typeof status !== 'string' || !['Accept', 'Reject', 'Waitlist'].includes(status)) {
        return res.status(400).send(`Status must be one of these: "Accept", "Reject", "Waitlist".`);
    }

    try {
        await pool.query(
            `UPDATE leads SET status = $1 WHERE id = $2`, [status, req.params.learnerId]
        );
        res.status(201).send(`Status got updated!`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// search a lead
app.get("/learners", async (req, res) => {
    const { name, email } = req.body;
    // validation
    if (name && typeof name !== 'string') {
        return res.status(400).send(`Name must be a string.`);
    }
    if (email && (typeof email !== 'string' || !email.endsWith('@gmail.com'))) {
        return res.status(400).send(`Email must be a string and has valid email address.`);
    }

    try {
        const learners = await pool.query(
            `SELECT * FROM learners WHERE name = $1 OR email = $2`, [name, email]
        );
        res.send(learners.rows);
    } catch (error) {
        res.status(500).send(error);
    }
});

// add comment to a lead
app.post("/learners/:learnerId/comments", async (req, res) => {
    const { comment_text } = req.body;
    // validation
    if (typeof comment_text !== 'string' || comment_text.length < 1) {
        return res.status(400).send(`Comment text must be a non-empty string.`);
    }

    try {
        await pool.query(
            `INSERT INTO comments (comment_text, lead_id) VALUES ($1, $2)`, [comment_text, req.params.learnerId]
        );
        res.status(201).send(`Your comment got added!`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// for any route error
app.get("/*", (req, res) => {
    res.send(`You got the route error`);
});