const mongoose=require('mongoose');
const bcrypt=require('bcrypt');


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User must have name']

    },
    email:{
        type:String,
        required:[true,'User must contain Email'],
        unique:true
    },
    confirmEmail:{
        type:String,
        required:[true,'User must validate Email'],
        validate:{
            validator:function(el){
                return el==this.email
            },
            message:'please confirm your email'
        }
    },
    password:{
        type:String,
        required:[true,'User must contain password'],
        select:false
    },
    likedSongs:{
        type:[mongoose.Schema.ObjectId],
        required:[true,'A user must have liked songs']
    }
})



userSchema.methods.correctPassword=async function(passwordDB,typedPassword)
{
    return await bcrypt.compare(typedPassword,passwordDB);
}


userSchema.pre('save',async function(next){

    this.password=await bcrypt.hash(this.password,12);
    next();
})

const users=mongoose.model('users',userSchema);



module.exports=users;