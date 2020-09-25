const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Event = require('../models/eventsc');
const SpeEvent = require('../models/specevesc');
const Enroll = require('../models/enrollevent');


const { ensureIndexes } = require('../models/user');
const dburl ="mongodb+srv://rigved:rigved@cluster0.lboig.gcp.mongodb.net/project?retryWrites=true&w=majority";

mongoose.connect(dburl,{useNewUrlParser:true, useUnifiedTopology: true } , function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb Atlas')      
    }
});


function ensureToken(req,res,next){

    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next(); 
    }
    else{
        res.status(403);
    }
}

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email : userData.email}, (err, user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                res.status(401).send('Invalid email');
            }
            else if(user.password !== userData.password){
                res.status(401).send('Invalid Password');
            }
            else{
                let payload = {subject : user._id}
                let token = jwt.sign(payload,'secretkey')
                res.status(200).send({token})
            }
        }
    })
})

router.post('/register', (req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((err,registerdUser)=>{
        if(err){
            console.log(err);
        }
        else{
            let payload = {subject : registerdUser._id};
            let token = jwt.sign(payload , 'secretkey');
            res.status(200).send({token});
        }
    })
})
router.get('/events', async(req,res) => {
    try{
        let event = await Event.find()
        res.json(event)
    }catch(err){
     res.send('Error ' + err)
    }
})

router.get('/special', ensureToken, async(req, res) => {
    try{
        let specialevent = await SpeEvent.find()
        res.json(specialevent)
    }catch(err){
     res.send('Error ' + err)
    }
})
module.exports = router;

router.post('/events', async(req,res) => {
    const event = new Event({
        name: req.body.name,
        description: req.body.description,
        teacher: req.body.teacher,
        date :  req.body.date
    })
    try{
        const e1 =  await event.save();
        res.json(e1);
    }catch(err){
        res.send('Error')
    }
})

router.post('/special', async(req,res) => {
    const spevent = new SpeEvent({
        name: req.body.name,
        description: req.body.description,
        teacher: req.body.teacher,
        date :  req.body.date
    })
    try{
        const spe1 =  await spevent.save() 
        res.json(spe1)
    }catch(err){
        res.send('Error')
    }
})

router.post('/enrollevent', async(req,res) => {
    const enrolled = new Enroll({
        fname: req.body.fname,
        sname : req.body.sname,
        topic : req.body.topic,
        email : req.body.email
    })
    try{
        const enr1 =  await enrolled.save();
        res.json(enr1);
    }catch(err){
        res.send('Error')
    }
})



/*
this fuction may user for admin panel 
router.post('/login', (req, res) => {
    let userData = req.body
    
    if ((userData.email == "Marvellous") && (userData.password == "Marvellous")) 
    {
      let payload = {subject: 1}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})   
    } 
    else 
    {
        res.status(401).send('Invalid Password')
    } 
})
*/
/*
This method not working properly
function verifyToken(req, res, next) 
{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}
*/

