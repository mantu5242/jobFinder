const UserModel = require('../../Models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerController = async(req,res) => {
    try{
        const {profilePic,username,email,phonenumber,password} = req.body;
        // if(!profilePic || !username || !email || !phonenumber || !password){
        //     return res.status(400).send('All field are required')
        // }
        console.log('trying check')
        console.log(req.body)
        console.log(email)
        const user = await UserModel.findOne({email});
        console.log(user)

        if(!user){
            console.log(user);
            console.log("new user");
        }

    }
    catch(error){

    }
}

module.exports = {registerController}