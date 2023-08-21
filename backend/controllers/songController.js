const catchAsync = require("../utils/catchAsync");
const Song=require('../models/songModel');
const User=require('../models/userModel');

exports.getSong=catchAsync(async(req,res,next)=>{

    const song=await Song.findById(req.params.songId)

    res.status(200).json({
        status:'success',
        song
    })
})

exports.getAllSong=catchAsync(async(req,res,next)=>{

    const songs=await Song.find();

    res.status(200).json({
        status:'success',
        songs,
    })
})

exports.likedSong=catchAsync(async(req,res,next)=>{

    
    const isActive=req.body.isActive;
    const user=await User.findById(req.user._id).populate('likedSongs');
    const songName=req.body.songName;
    const PassedSong=await Song.findOne({name:songName});


    if(isActive===true)
    {
    user.likedSongs.push(PassedSong._id);
    }
    else
    {
     user.likedSongs=user.likedSongs.filter((song)=>song.name!==PassedSong.name);
       console.log(user.likedSongs);
    }

    await user.save();


    res.status(200).json({
        status:'success',
    })
})


exports.getAllLikedSongs=catchAsync(async(req,res,next)=>{



    const user=await User.findById(req.user._id).populate('likedSongs');

    res.status(200).json({
        status:'success',
        likedSongs:user.likedSongs
    })
})
