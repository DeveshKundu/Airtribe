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

app.get("/courses", async (req, res) => {
    try {
        const courses = await CourseCollection.find({});
        res.json({ courses });
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/courses", async (req, res) => {
    const course = new CourseCollection(req.body);
    try {
        await course.save();
        res.status(201).send(course);
    } catch (error) {
        res.status(400).send(error);
    }
});

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

