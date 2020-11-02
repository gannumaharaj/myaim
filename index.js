require('dotenv').config()
const express = require("express");
const app = express();
require('./passport-setup')
const dotenv = require("dotenv");
const passport = require('passport');
const mongoose = require('mongoose');
const session =  require('express-session');
const cors = require("cors");
var sendgrid = require("sendgrid")(process.env);

app.use(passport.initialize());
app.use(passport.session());
app.use(session({secret:'thisissecretkey'}))


mongoose.connect("mongodb+srv://grishma:Grishma@10@cluster0.k6qis.mongodb.net/gannu?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true },()=> console.log("gannu mahraj ji connect"));
app.get('/sucess',(req,res)=>{
 console.log("complete");
});


app.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));
app.get( '/google/callback',
    passport.authenticate( 'google' 
       
),function(req,res) {
res.redirect("/sucess");
});
app.get('/auth/facebook',
  passport.authenticate('facebook', { scope:
      [ 'email', 'profile' ] }
));
app.use(express.json());
app.use(cors());
let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: true,
    service : 'Gmail',
    
    auth: {
      user: 'suryawanshigrishma32@gmail.com',
      pass: 'atgZyvpjTWnLz4DE',
    }
    
});


app.listen(3000,()=>{
console.log("ganuu maharaj ");
});