const express = require('express');
const { CourseCollection } = require('./db');
const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

app.get("/*", (req, res) => {
    res.send("You got the route error");
});

