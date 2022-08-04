const express = require('express');

const router = express.Router();

//route tanımlamalar
router.get("/", (req, res) => {
    res.send("fetch products list");
});


router.get("/:id", (req, rest) => {
    rest.send(`fetch product ${req.params.id}`);
});

//post
router.post("/", (req, res) => {
    res.send("create product");
});

router.put("/:id", (res, req) => {
    res.send(`update product ${req.params.id}`);
})

router.delete("/:id", (req, rest) => {
    rest.send(`delete product ${req.params.id}`);
});


module.exports = router;

//not: mongodbdeki ip yi değiştir. sabit ip olması daha iyi.



