const User = require('../../db').User

const route = require('express').Router()

route.get('/' , (req,res) => {
    //We want to send the array of all users
    // from our databse

    User.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error:"Could Not Retrive Users"
            })
        })
})


route.post('/' , (req,res) => {
    // We except the req to have name in it
    // we will create a new user

    User.create({
        name: req.body.name
    })/*user is being created and sent*/
    .then((user) =>{
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({
            error: "Could Not Add New Users"
        })
    })
})


exports = module.exports = route