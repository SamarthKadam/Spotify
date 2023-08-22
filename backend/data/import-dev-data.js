const mongoose=require('mongoose');
const dotenv=require('dotenv');
const Song=require('../models/songModel');
const fs=require('fs');

dotenv.config({path:'../config.env'});




const DBAuth=process.env.DB.replace('<password>',process.env.DBpassword);


mongoose.connect(DBAuth,{
    useUnifiedTopology: true 
}).then((con)=>{
    console.log("DB connected");
})



const songs=JSON.parse(fs.readFileSync(`${__dirname}/data.json`,'utf-8'));

const importData=async()=>{

    try{
        await Song.create(songs);
        console.log("Data succesfully added");
    }
    catch(err)
    {
        console.log(err);
    }
    process.exit();
}


const deleteData=async()=>{
    try{
        await Song.deleteMany();
        console.log("data successfully deleted");
    }
    catch(err)
    {
        process.exit();
    }
}


if(process.argv[2]==='--import')
{
    setTimeout(()=>{
        importData();
    },10000)
}
else if(process.argv[2]==='--delete'){
    deleteData();
}