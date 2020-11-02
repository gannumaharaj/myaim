const router = require("express").Router();
const User = require("../model/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const nodemailer = require("nodemailer");

router.post("/register", async (req, res)=>{

    const user = new User({
    number: req.body.number,
    email: req.body.email
    
});

    const savedUser = await user.save();
    res.send(savedUser);
    res.json("created successfully");

});
router.use(cors());


router.post("/login", async (req,res)=>{
    const user =  await User.findOne({email: req.body.email})
if(!user){
    return res.status(400).send("email is wrong");
}

const validPass = await bcrypt.compare(req.body.password,user.password);
if(!validPass) return   res.status(400).send("invalid");
console.log("gannu maharaj ji ap login")
res.send("ganuu  login");
const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
res.header("auth-token",token).send({token :token});
});





module.exports = router;