const express=require('express');

const router=express.Router();


router.post("/register",(req,res)=>{
    res.send("register");
});

router.post("/login",(req,res)=>{
    res.send("Login");
});


module.exports=router;