import mongoose from 'mongoose'


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

  isAdmin:{
    type:Boolean,
    default:false
  },
  
  isBan:{
    type:Boolean,
    default:false
  },
  
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
  }],
});

export const Users=mongoose.model('users', userSchema)
