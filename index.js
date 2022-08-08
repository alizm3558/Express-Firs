const express=require('express');

const productsRouter=require("./routes/products");
const authRouter=require("./routes/auth");
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
app.use(bodyParser.urlencoded({ extended: true }));

const port=process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
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
                 
},{useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true, //make this true
    autoIndex: true,}
);





app.use("/auth",authRouter)
app.use("/products",productsRouter);

const products=[
    {
        id:"string",
        title:"string",
        desciption:"string",
        prices:"number"
    },
]; 