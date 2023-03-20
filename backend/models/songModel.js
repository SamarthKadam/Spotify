const mongoose=require('mongoose');

const songSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A Song should have name'],
        unique:true
    },
    audioURL:{
        type:String,
        required:[true,'A Song must have Url']
    },
    CoverImg:{
        type:String,
        required:[true,'A song must have CoverImg'],
    },
    smImg:{
        type:String,
        required:[true,'A song must have smgImg']
    } ,
    artists:{
        type:String,
        required:[true,'A song must have artists']
    }
    
})

const song=mongoose.model('songs',songSchema);

module.exports=song;