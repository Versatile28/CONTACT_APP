const express = require('express');
const app = express();
const {connect} = require('mongoose');
const { PORT, MONGODB_URI } = require('./config/index');
let schema=require('./schema/schema')
const {engine} = require('express-handlebars');
const routing = require('./router/router')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended:true}))

let connectDB = async() => {
    await connect(MONGODB_URI);
    console.log('mongodb connected...')
}
connectDB();

app.get('/', (req, res) => {
    res.render('home', {title:'home page'})
})

app.get('/home', (req, res) => {
    res.render('home', {title:'home page'})
})

app.use('/api', routing)

app.listen(PORT, err=> {
    if(err) throw err;
    console.log(`server running on ${PORT}`)
})