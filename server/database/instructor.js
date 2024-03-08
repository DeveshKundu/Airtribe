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

// model to create collection
const InstructorCollection = mongoose.model('Instructor', InstructorSchema);

module.exports = mongoose;