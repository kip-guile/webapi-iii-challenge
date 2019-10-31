const express = require('express');
const Users = require('./userDb.js');
const Posts = require('../posts/postDb.js')

const router = express.Router();

router.post('/', validateUser, (req, res, next) => {
    Users.insert(req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(next)
});

router.post('/:id/posts', [validateUserId, validatePost], (req, res, next) => {
    Posts.insert(req.body)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(next)
});

router.get('/', (req, res, next) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
    res.json(req.user)
});

router.get('/:id/posts', validateUserId, (req, res, next) => {
    Users.getUserPosts(req.params.id)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(next)
});

router.delete('/:id', validateUserId, (req, res, next) => {
    Users.remove(req.user.id)
        .then(() => {
            res.status(200).json({message: 'user has been deleted'})
        })
        .catch(next)
});

router.put('/:id', [validateUserId, validateUser], (req, res) => {
    Users.update(req.user.id, req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json({message: 'Error updating user: ' + error.message})
        })
});

//custom middleware

function validateUserId(req, res, next) {
    const {id} = req.params;
    Users.getById(id)
    .then(user => {
        if (user) {
            req.user = user;
            next()
        } else {
            res.status(400).json({message: 'invalid user ID'})
        }
    })
    .catch(error => {
        res.status(500).json({message: 'Something terrible happend while checking hub id: ' + error.message,})
    })
}

function validateUser(req, res, next) {
    if (Object.keys(req.body).length) {
        if (Object.keys(req.body).includes("name")) {
            next();
        } else {
            res.status(400).json({ message: "missing required name field" });
        }
      } else {
        res.status(400).json({ message: "missing user data" });
      }
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
