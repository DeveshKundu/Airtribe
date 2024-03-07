const express = require('express');
const { CourseCollection, LearnerCollection, InstructorCollection, CommentCollection } = require('./db');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

app.get("/*", (req, res) => {
    res.send(`You got the route error`);
});

// list all the courses
app.get("/courses", async (req, res) => {
    try {
        const courses = await CourseCollection.find({});
        res.send(courses);
    } catch (error) {
        res.status(400).send(error);
    }
});

// create a course
app.post("/courses", async (req, res) => {
    const course = new CourseCollection(req.body);
    try {
        await course.save();
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
});

// update the course details by instructor
app.put("/courses/:courseId", async (req, res) => {
    try {
        const course = await CourseCollection.findByIdAndUpdate(
            req.params.courseId, req.body, {new: true, runValidators: true}
        );
        if (!course) {
            return res.status(404).send();
        }
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
});

// register for a course by learner
app.post("/courses/:courseId/learners", async (req, res) => {
    try {
        const course = await CourseCollection.findById(req.params.courseId);
        const learner = new LearnerCollection({ ...req.body, course: course._id });
        await learner.save();
        res.status(201).send(learner);
    } catch (error) {
        res.status(400).send(error);
    }
});

// update a lead with their status by instructor
app.patch("/learners/:learnerId", async (req, res) => {
    try {
        const learner = await LearnerCollection.findByIdAndUpdate(
            req.params.learnerId, req.body, {new: true, runValidators: true}
        );
        if (!learner) {
            return res.status(404).send();
        }
        res.status(201).send(learner);
    } catch (error) {
        res.status(400).send(error);
    }
});

// search a lead
app.get("/learners", async (req, res) => {
    try {
        const learners = await LearnerCollection.find(req.query);
        res.send(learners);
    } catch (error) {
        res.status(500).send(error);
    }
});

