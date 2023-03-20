const mongoose=require('mongoose');

const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Playlist must have name'],
        unique:true
    },
    playListSongs:[{
        type:mongoose.Schema.ObjectId,
        required:[true,'A playlist must have songs'],
        ref:'songs'
 }],
    img:{
        type:String,
        required:[true,'A playlist must have img']
    }

})

const playlist=mongoose.model('playlist',playlistSchema);

module.exports=playlist;