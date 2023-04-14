const express = require('express')
const bodyParser = require('body-parser')
const posts = require('../model/posts')

const router = express.Router()

router.get("/all", (req, res) =>{

    res.json(JSON.stringify(posts.getAll()))

})

router.post("/new",bodyParser.json(), (req, res) =>{
    const title = req.body.title
    const description = req.body.description

    posts.newPosts(title, description)

    res.send("Post adicionado")
})

module.exports = router;