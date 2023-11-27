import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique:true
  },
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required: true,
  },
  password:{
    type:String,
    required: true,
    // set:(password:string)=>bcrypt.hash(password,8)
  },
  image:{
    type:String,
    default:'public/images/usersimages/default_user.png'
  },

  isAdmin:{
    type:Boolean,
    default:false
  },
  
  isBan:{
    type:Boolean,
    default:false
  },

  wishList:[{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
  }],
  orders: [{
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Order',
  }]
});

export const Users=mongoose.model('users', userSchema)
