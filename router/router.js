const {Router} = require('express')
const router = Router()
let cnt_Schema = require('../schema/schema')
const fs = require('fs');

router.get('/style',(req,res)=>{
    fs.readFile('./public/cnt.css',(err,data)=>{
       if(err) throw err;
       res.end(data);
    });
 })

router.get('/addContact', (req, res) => {
    res.render('Contact_App/addContact', {title:'Add Contact'})
})

router.post('/addContact', async (req, res) => {
    await cnt_Schema.create(req.body)
    res.redirect('/home', 302, {})
})

router.get('/allcontact',async (req,res)=>{
    let payload = await cnt_Schema.find().lean();
    res.render('Contact_App/cnt_list',{title:'All-Contacts',payload});
 })
 
 //?lean() method is used to convert documnet to plain object
 
 router.get('/:id',async (req,res)=>{
    let payload = await cnt_Schema.findOne({_id:req.params.id}).lean();
    res.render('Contact_App/single_cnt',{title:'Single-Contacts',payload});
 })

 router.get('/edit/:id', async (req, res) => {
    let editData = await cnt_Schema.findOne({_id:req.params.id}).lean();
    res.render('Contact_App/edit', {title:'edit-contact',editData})
 })

router.post('/edit/:id', async (req, res) => {
    let editData = await cnt_Schema.findOne({_id:req.params.id})
    editData.fname = req.body.fname;
    editData.lname = req.body.lname;
    editData.loc = req.body.loc;
    editData.number = req.body.number;

    editData.save();
    res.redirect('/api/allcontact', 302, {})
})

router.get('/delete/:id', async (req, res) => {
    await cnt_Schema.deleteOne({_id:req.params.id})
    res.redirect('/api/allcontact', 302, {})
})

module.exports = router;