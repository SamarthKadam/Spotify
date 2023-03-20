const catchAsync = require("../utils/catchAsync");
const Song=require('../models/songModel');

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