const {Router} = require('express');
const router = Router();
const cnt_Schema = require('../schema/schema');

router.get('/addcontact',(req,res)=>{
   res.render('contact_app/addContact',{'title':'Add_Contact'});
})



router.post('/addcontact',async(req,res)=>{
   await cnt_Schema.create(req.body);
   res.redirect('/home',302,{});
})

module.exports=router;