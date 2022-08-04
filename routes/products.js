const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

//route tanımlamalar
router.get("/", (req, res) => {
    Product.find()
    .then((products)=>{
        res.json(products);
    })
    .catch((err)=>{
        res.json(err);
    });
    
});


router.get("/:id", (req, rest) => {
    rest.send(`fetch product ${req.params.id}`);
});

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



