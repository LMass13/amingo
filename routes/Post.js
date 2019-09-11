const express = require('express')
const Post = require('../models/Post')

const router = express.Router();

/**
 * @name POST 
 * 
 * @param {string} message
 * @param {string} email
 * 
 */

 router.post('/', (req, res)=> {
     User
        .find({email: req.body.email})
        .then(user =>{
            const newPost = new Post({
                email: req.body.email,
                message: req.body.message,
                userId: user.id
            })       
        })
 })

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err))

    router.get('/', (req, res) =>{
        Post
        .find({email: req.query.email})
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
    })

    router.get('/getByEmail', (req, res) =>{
        Post
        .find({email: req.query.email})
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
    })

    module.exports = router;

