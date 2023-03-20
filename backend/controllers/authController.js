const User=require('../models/userModel');
const catchAsync=require('../utils/catchAsync');
const jwt=require('jsonwebtoken');
const AppError = require('../utils/AppError');
const {promisify}=require('util');

const signToken=(id)=>{
    const token=jwt.sign({id},process.env.JWTSECRET,{expiresIn:process.env.JWTEXPIRES});
    return token;
}

exports.signup=catchAsync(async(req,res,next)=>{


    const user=await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmEmail:req.body.confirmEmail 
    })


    const token=signToken(user._id);


    res.cookie('jwt',token,{
        httpOnly:false,
        expire:new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES*24*60*60*1000)
    })

    res.status(201).json({
        status:'success',
        token,
        data:user
    })
})

exports.login=catchAsync(async (req,res,next)=>{

    const {email,password}=req.body;

    if(!email||!password)
    {
        return next(new AppError('Please provide email and password',400))
    }

    const user=await User.findOne({email}).select('+password');


    if(!user || !(await user.correctPassword(user.password,password)))
    {
        return next( new AppError('Incorrect email or password',400))
    }


    const token=signToken(user._id);


    res.status(200).json({
        status:'success',
        token,
    })
});


exports.protect=catchAsync(async(req,res,next)=>{

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        token=req.headers.authorization.split(' ')[1];
    }

    if(!token)
    {
        return next(new AppError('You are not logged in, Please log in to get access',400));
    }

    const decoded=await promisify(jwt.verify)(token,process.env.JWTSECRET);

    
    const freshUser=await User.findById(decoded.id);

    if(!freshUser)
    {
        return next(new AppError('The user belonging to token no longer exist',401));
    }

    req.user=freshUser;
   next();



})


exports.getCurrentUser=catchAsync(async(req,res,next)=>{

    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        token=req.headers.authorization.split(' ')[1];
    }

    if(!token)
    {
        return next(new AppError('You are not logged in, Please log in to get access',400));
    }

    const decoded=await promisify(jwt.verify)(token,process.env.JWTSECRET);

    
    const freshUser=await User.findById(decoded.id);

    if(!freshUser)
    {
        return next(new AppError('The user belonging to this token no longer exist',400));
    }

    res.status(200).json({
        status:'success',
        user:freshUser
    })



})



exports.send=catchAsync(async(req,res,next)=>{

    res.status(200).json({
        status:'success'
    })
})