const mongoose=require('mongoose');

const ProductShema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

//Products:table adıdır
module.exports=mongoose.model("Product",ProductShema);