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

// model to create collection
const CommentCollection = mongoose.model('Comment', CommentSchema);

module.exports = mongoose;