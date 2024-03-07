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

// model for Instructors
const InstructorCollection = mongoose.model('Instructor', InstructorSchema);