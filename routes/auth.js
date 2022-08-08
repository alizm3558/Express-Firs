const express=require('express');

const router=express.Router();
const User=require("../models/Users");
const Joi=require("@hapi/joi");
const bcrypt=require("bcryptjs");


const registerSchema = Joi.object({ //gelen değerlerin formata uygun olup olmamasının kontrolü için.
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().email().min(6).max(255),
    password: Joi.string().required().min(6).max(255),
  });

router.post("/register",(req,res)=>{

   
   const {error} =registerSchema.validate(req.body);//gelen değerlerin formata uygun olup olmamasının kontrolü için.

   if(error){
        res.status(400).send(error.details[0].message);
        return;
   }

   const salt=bcrypt.genSaltSync(10);
   const hash=bcrypt.hashSync(req.body.password,salt);

//...req.body: body boşaltıyoruz.
   const user=new User({...req.body,password:hash});
   user
   .save()
   .then((user)=>{
       res.send(user);
   })
   .catch((err)=>{
       res.send(err);
   });

});

router.post("/login",(req,res)=>{
    res.send("Login");
});


module.exports=router;