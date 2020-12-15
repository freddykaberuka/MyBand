import mongoose, { Schema } from 'mongoose';

const articlesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    bodie: {
        type: String,
        required: true,
    },
    conclusion: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
   

});

module.exports = mongoose.model('Article', articlesSchema);
