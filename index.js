const express=require('express');

const productsRouter=require("./routes/products");
const app=express();
require("dotenv/config");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
//dotenv kullanıldı.
const username=process.env.USERNAME;
const password=process.env.PASSWORD;
const cors=require("cors");

app.use(cors());
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})


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






app.use("/products",productsRouter);

const products=[
    {
        id:"string",
        title:"string",
        desciption:"string",
        prices:"number"
    },
]; 