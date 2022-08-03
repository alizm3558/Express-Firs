const express=require('express');
const productsRouter=require("./routes/products");
const app=express();
require("dotenv/config");

const mongoose=require("mongoose");
//dotenv kullanıldı.
const username=process.env.USERNAME
const password=process.env.PASSWORD

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.axl8t.mongodb.net/products?retryWrites=true&w=majority`,
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