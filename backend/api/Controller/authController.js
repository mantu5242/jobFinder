const userModel = require('../../Models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config();


const loginController = async(req,res) => {
    try{
        // console.log(req.body);
        const {email,password} = req.body;
        const user = await userModel.findOne({email});
        // console.log(user);
        
        if(!user){
            return res.status(404).json({message:'user doesnot exit, create account',success:false});
            console.log('user nhi mila')
        }
        console.log('user mil gya')
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:'password is incorrect',success: false});
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        console.log(token);

        res.cookie('token',token,{httpOnly:true, maxAge: 24 * 60 * 60 * 1000,}) ;

        res.status(200).json({
            status: "Success",
            message: "Logged in Successfully",
            success:true,
            data: user,
          });

        
    }
    catch(error){
        res.status(500).json({
            message: error.message,
          });
    }
}

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

module.exports = {registerController,loginController}