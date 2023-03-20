const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=require('./app');


dotenv.config({path:'./config.env'});
const DBAuth=process.env.DB.replace('<password>',process.env.DBpassword);


console.log(DBAuth);

mongoose.connect(DBAuth,{

    useUnifiedTopology: true 
}).then((con)=>{
    console.log("DB connection successful");
})

process.on('unhandledRejection',err=>{
    console.log(err.name,err.message);
    console.log("Unhandled rejection");
})

const port=process.env.PORT;

const server=app.listen(port,()=>{
    console.log(`SERVER RUNNING IN PORTNO:${port}`);
})
