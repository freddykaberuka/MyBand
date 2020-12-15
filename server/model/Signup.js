import mongoose, { Schema } from 'mongoose';

const signupSchema = new Schema({
    email: {
        type: String,
        match: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },

});

module.exports = mongoose.model('Signup', signupSchema);
