const mongoose = require('mongoose');
const color = require('colors');
const dotenv = require('dotenv');
dotenv.config();
// 2R8YEGl9LBaNPhWl
const uri = "mongodb+srv://mantukr5242:2R8YEGl9LBaNPhWl@cluster0.o58bx.mongodb.net/";
// const uri = 'mongodb://127.0.0.1:27017/jobFinder'
const connectDB = async() => {
    try{
        console.log('db',uri);
        await mongoose.connect(uri,{useNewUrlParser: true});
        console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`Mongodb Server Issue ${error}`.bgRed.white);
    }
    
}

module.exports = connectDB;