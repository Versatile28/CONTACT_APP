const mongoose = require('mongoose')
const cnt_Schema = new mongoose.Schema({
   fanme:{
      type:String,
      required:true
   },
   lname:{
      type:String,
      required:true
   },
   nmbr:{
      type:Number,
      required:true
   },
   loc:{
      type:String,
      required:true,
      enum:['mobile','sim','email']
   }
},{timestamps:true})