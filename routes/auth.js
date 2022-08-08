const express=require('express');

const router=express.Router();
const User=require("../models/Users");

router.post("/register",(req,res)=>{

   const {name,email,password}=req.body;
   const user=new User({name,email,password});
   user
   .save()
   .then((user)=>{
       res.send(user);
   })
   .catch((err)=>{});

});

router.post("/login",(req,res)=>{
    res.send("Login");
});


module.exports=router;