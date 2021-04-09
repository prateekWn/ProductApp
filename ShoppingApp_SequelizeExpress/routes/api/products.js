const Product = require('../../db').Product
const route = require('express').Router()


route.get('/' , (req,res) => {
    //We expect to get the products in it
    Product.findAll()
        .then( (products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could Not Retrive The Proudcts"
            })
        })
})

route.post('/' , (req,res) => {
    //Validates a value
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "Price Is Not Valid Number"
        })
    }

    //We want to create the products
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price : parseFloat(req.body.price)
    }).then((product) => {
        res.status(201).send(product)    
    }).catch((err) => {
        res.status(501).send({
            error: "Error Adding Product"
        })
    })
})
exports = module.exports = route