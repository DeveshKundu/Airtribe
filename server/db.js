const mongoose = require('mongoose');

const uri = "mongodb+srv://deveshk28:6DsgooiaNWy3Z5iC@clustur.xvadqep.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then( () => console.log("Connected to MongoDB!") )
  .catch( () => console.error.bind(console, "MongoDB connection error:") );

// Schema for Instructors
const InstructorSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

// Schema for Learners
const LearnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    linkedin_profile: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    status: {
        type: String,
        enum: ['Accepted', 'Rejected', 'Waitlist'],
        default: 'Waitlist'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

// Schema for Courses
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    max_seats: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    },
    learners: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learner'
    }]
});

// Schema for Comments
const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    },
    learner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learner'
    }
});

// All required models
const InstructorCollection = mongoose.model('Instructor', InstructorSchema);
const LearnerCollection = mongoose.model('Learner', LearnerSchema);
const CourseCollection = mongoose.model('Course', CourseSchema);
const CommentCollection = mongoose.model('Comment', CommentSchema);