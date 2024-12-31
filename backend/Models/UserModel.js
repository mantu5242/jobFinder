const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profilePic: {
        type: String,
        required: false, 
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
