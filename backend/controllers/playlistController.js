const catchAsync = require("../utils/catchAsync");
const Playlist=require('../models/playlistModel');


exports.createPlaylist=catchAsync(async(req,res,next)=>{

    const playlist=await Playlist.create(req.body);

    res.status(200).json({
        status:'success',
        playlist
    })
})






exports.getAllPlaylist=catchAsync(async(req,res,next)=>{


    const playlist=await Playlist.find().populate('playListSongs');

    res.status(200).json({
        status:'success',
        user:req.user,
        playlist
    })

})