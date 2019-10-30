const express = require('express');
const Users = require('./userDb.js');

const router = express.Router();

router.post('/', validatePost, (req, res) => {
    Users.insert(req.body)
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: 'Error adding the user: ' + error.message,})
        })
});

// router.post('/:id/posts', (req, res) => {
    
// });

router.get('/', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json({message: 'Error retrieving users ' + error.message})
        })
});

router.get('/:id', [validateUserId, validateUser], (req, res) => {
    res.json(req.user)
});

router.get('/:id/posts', [validateUserId, validateUser], (req, res) => {
    Users.getUserPosts(req.params.id)
        .then(messages => {
            res.status(200).json(messages)
        })
        .catch(error => {
            console.log(error);
            res.status(500)
        })
});

router.delete('/:id', [validateUserId, validateUser], (req, res) => {
    Users.remove(req.user.id)
        .then(() => {
            res.status(200).json({message: 'user has been deleted'})
        })
        .catch((error) => {
            res.status(500).json({message: 'Error deleting user' + error.message})
        })
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
    if (parseInt(id) > 0) {
        next();
    } else {
        res.status(400).json({message: "invalid user id"})
    }
}

function validateUser(req, res, next) {
    Users.getById(req.params.id)
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

function validatePost(req, res, next) {
if (req.body.name) {
        next();
    } else {
        res.status(400).json({message: "missing user data"})
    }
}

module.exports = router;
