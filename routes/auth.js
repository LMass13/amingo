const express = require('express');
const User = require('../models/User');

const router = express.Router();

/**
 * Post route for registering new user
 *  @name POST /users/register
 * 
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {string} occupation - occupation of the user
 * @param {name} name - name of the user
 * 
*/

router.post('/register', (req, res) =>{
    User.findOne({email:req.body.email
    .then(user => {

        if (user) {
            //Return error message
            res.json({message: "Email already in use"})
        } else {
            //Save new user
            const newUser = new User({
                name:req.body.name,
                email:req.body.email,
                occupation: req.body.occupation,
                password: req.body.password
            })

            newUser
            .save()
            .then(user =>{
                res.json(user)
            })
            .catch(err => {
                res.json(err)
            })
        }
    })})
})

module.exports = router