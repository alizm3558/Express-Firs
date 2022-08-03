const express=require('express');

const app=express();

app.get("/",(req,res)=>{ //req: gelen istek, res: gönderilen
    res.send("Hello world");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})