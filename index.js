const express=require('express');
const productsRouter=require("./routes/products");
const app=express();

const mongoose=require("mongoose");
const username="<username>"
const password="<password>"

mongoose.connect('<connect_info>',
(e)=>{
    if(e){
        console.log(e);
        console.log("bakınız buradayız")
    }
    else
    {console.log("Connected database"); 
    } 
                 
}
);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.use("/products",productsRouter);

const products=[
    {
        id:"string",
        title:"string",
        desciption:"string",
        prices:"number"
    },
]; 