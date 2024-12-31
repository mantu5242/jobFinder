const userModel = require('../../Models/UserModel')
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
        
        const existUser = await userModel.findOne({email});
        if(existUser){
            return res.status(201).json({message: 'user already exist'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);
        req.body.password = hashPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(200).json({message: 'user created successfully',success:true})

    }
    catch(error){
        console.log('Error in registerController',error);
        return res.status(500).json({message:"Internal server error"});
    }
}

module.exports = {registerController}