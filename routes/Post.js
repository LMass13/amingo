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
    const newPost = new Post({
        email: req.body.email,
        message: req.body.message
    })
 })

    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.json(err))

    router.get('/', (req, res) =>{
        Post
        .find()
        .then(posts => res.json(posts))
        .catch(err => res.json(err))
    })

    module.exports = router;

