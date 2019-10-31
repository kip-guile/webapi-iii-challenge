const express = require('express');
const Posts = require('./postDb.js')

const router = express.Router();

router.get('/', (req, res, next) => {
    Posts.get()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(next)
});

router.get('/:id', validatePostId, (req, res) => {
    res.json(req.post)
        
});

router.delete('/:id', validatePostId, (req, res, next) => {
    Posts.remove(req.post.id)
    .then(() => {
        res.status(200).json({message: 'user has been deleted'})
    })
    .catch(next)
});

router.put('/:id', [validatePostId, validatePost], (req, res, next) => {
    Posts.update(req.post.id, req.body)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(next)
});

// custom middleware

function validatePostId(req, res, next) {
 const {id} = req.params
 Posts.getById(id)
 .then(post => {
     if (post) {
         req.post = post;
         next()
     } else {
         res.status(400).json({message: "invalid post ID"})
     }
 })
 .catch(error => {
    res.status(500).json({message: 'Something terrible happend while checking hub id: ' + error.message,})
})
}

function validatePost(req, res, next) {
    if (Object.keys(req.body).length) {
        if (Object.keys(req.body).includes("text")) {
            next();
        } else {
            res.status(400).json({ message: "missing required text field" });
        }
      } else {
        res.status(400).json({ message: "missing post data" });
      }
}

router.use((error, req, res) => {
    res.status(500).json({
        file: 'userRouter',
        method: 'req.method',
        url: req.url,
        message: error.message
    })
})

module.exports = router;