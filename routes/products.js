const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

//route tanımlamalar


//get başlar
router.get("/", (req, res) => { //then-catch kısmı promise oluyor..
    Product.find() //.limit(10)   tüm veriler(dökümanları getirmek istemediğimizde limit koyarız.)
    .then((products)=>{
        res.json(products);
    })
    .catch((err)=>{
        res.json(err);
    });
    
});


router.get("/:id", (req, rest) => { //id ye göre ürünleri 
    Product.findById(req.params.id)
    .then((product)=>{
        rest.json(product);
    })
    .catch((err)=>{
        rest.json(err);
    });

});
// get biter



//post
router.post("/", (req, res) => {
    const product= new Product( {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description    ,
    });
    product.save();
    console.log(req.body);//istek atılırken body ile gönderilen veriler..
    res.json(product);
});


router.put("/:id", (res, req) => {//update
    Product.findByIdAndUpdate(req.paramas.id,{
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
    })//req.body de olabilir
    .then((product)=>{
        res.json(product);
    })
    .catch((err)=>{
        res.json(err);
    });

});



router.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then((product)=>{
        res.json(product);
    })
    .catch((err)=>{
        res.json(err);
    });
});


module.exports = router;

//not: mongodbdeki ip yi değiştir. sabit ip olması daha iyi.



