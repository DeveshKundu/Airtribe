const express = require('express');
const pool = require('./database/conn');

const app = express();
const port = 3000;

app.use(express.json());

// start the server
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

// for any route error
app.get("/*", (req, res) => {
    res.send(`You got the route error`);
});

// list all the courses
app.get("/courses", async (req, res) => {
    try {
        const courses = await pool.query(`SELECT * FROM courses`);
        res.status(201).send(courses.rows);
    } catch (error) {
        res.status(400).send(error);
    }
});

// create a course
app.post("/courses", async (req, res) => {
    const { name, max_seats, start_date, instructor_id } = req.body;
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
    try {
        await pool.query(
            `INSERT INTO learners (name, email, phone_number, linkedin_profile, course_id) VALUES ($1, $2, $3, $4, $5)`, [name, email, phone_number, linkedin_profile]
        );
        res.status(201).send(`You are registered for ${name}.`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// update a lead with their status by instructor
app.patch("/learners/:learnerId", async (req, res) => {
    const { status } = req.body;
    try {
        await pool.query(
            `UPDATE learners SET status = $1 WHERE id = $2`, [status, req.params.learnerId]
        );
        res.status(201).send(`Status got updated!`);
    } catch (error) {
        res.status(400).send(error);
    }
});

// search a lead
app.get("/learners", async (req, res) => {
    const { name, email } = req.query;
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
    try {
        await pool.query(
            `INSERT INTO comments (comment_text, application_id) VALUES ($1, $2)`, [comment_text, req.params.learnerId]
        );
        res.status(201).send(`Your comment got added!`);
    } catch (error) {
        res.status(400).send(error);
    }
});