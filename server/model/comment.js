import mongoose, { Schema } from 'mongoose';

const commentsSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    commenty: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Comment', commentsSchema);