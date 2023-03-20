const express=require('express');
const app=express();
const userRouter=require('./routes/userRoute');
const songRouter=require('./routes/songRoute');
const AppError=require('./utils/AppError')
const globalErrorHandler=require('./utils/errorControl');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const playlistRouter=require('./routes/playlistRoute');




app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use((req,res,next)=>{

    console.log("Hello from the middleware");
    next();
})


app.use('/api/v1/users',userRouter);
app.use('/api/v1/songs',songRouter);
app.use('/api/v1/playlist',playlistRouter);


app.all("*",(req,res,next)=>{
    
    next(new AppError("TypeError",404));
})


app.use(globalErrorHandler)

module.exports=app;