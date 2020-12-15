import mongoose, { Schema } from 'mongoose';

const contactsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}/,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },

});

module.exports = mongoose.model('Contact', contactsSchema);
