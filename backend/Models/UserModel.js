const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    profilePic:{
        type:String,
        required: true,
        unique:true
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    phonenumber:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
},{timestamps:true});

const userModel = mongoose.model('user', userSchema);

module.exports = { userModel};  