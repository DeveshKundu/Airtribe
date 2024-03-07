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

// All required models
const InstructorCollection = mongoose.model('Instructor', InstructorSchema);
const LearnerCollection = mongoose.model('Learner', LearnerSchema);