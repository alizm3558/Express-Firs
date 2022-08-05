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

router.put("/:id", (res, req) => {
    res.send(`update product ${req.params.id}`);
})

router.delete("/:id", (req, rest) => {
    rest.send(`delete product ${req.params.id}`);
});


module.exports = router;

//not: mongodbdeki ip yi değiştir. sabit ip olması daha iyi.



