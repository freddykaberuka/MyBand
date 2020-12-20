import mongoose, { Schema } from 'mongoose';

const commentsSchema = new Schema({
    email: {
        type: String,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/,
        
    },
    comment: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Comment', commentsSchema);