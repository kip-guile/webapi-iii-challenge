const express = require('express');
const pRouter = require('./posts/postRouter')
const uRouter = require('./users/userRouter')
const cors = require('cors')

const server = express();


server.use(cors())
server.use(express.json())


server.use(logger)
server.use('/api/posts', pRouter)
server.use('/api/users', uRouter)



//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl}`)
  next();
}

module.exports = server;
