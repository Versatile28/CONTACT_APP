const {model,Schema} = require('mongoose')
const cnt_Schema = new Schema({
   fname:{
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
},{Timestamps:true})

module.exports = model('cnt_Schema',cnt_Schema,'cnt_Schema');
//? module.exports = model('cnt_Schema',cnt_Schema); // collection name created - cnt_Schemas
//? module.exports = model('cnt_Schemy',cnt_Schema); // collection name created - cnt_Schemies
//? module.exports = model('cnt_Schema',cnt_Schema,'cnt_Schema'); // to restrict prual form