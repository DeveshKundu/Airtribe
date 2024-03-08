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

// model to create collection
const CourseCollection = mongoose.model('Course', CourseSchema);

module.exports = mongoose;