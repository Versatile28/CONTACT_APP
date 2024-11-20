// package.json
// server.js
// .env -> hide mongodb connection string and port of server(sequrity purpose)

const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const {connect} = require('mongoose');
let { PORT,MONGODB_URI} = require('./config/index');
const Schema = require('./schema/schema');
const {engine} = require('express-handlebars')
const routing = require('./router/router');


app.engine('handlebars',engine());
app.set('view engine','handlebars');

app.use(express.urlencoded({extended:true}))

let connectDb = async()=>{
  // await mongoose.connect(MONGODB_URI);
  await connect(MONGODB_URI);
console.log('mongodb connected');

}
connectDb();

app.get('/',(req,res)=>{
  res.send('Hello');
})

app.get('/home',(req,res)=>{
   res.render('home',{'title':'Home Page'});
 })

app.use('/api',routing);

app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log('Server is running on port 5000');
})