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

// model to create collection
const LearnerCollection = mongoose.model('Learner', LearnerSchema);

module.exports = mongoose;