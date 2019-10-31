const express = require('express');
const pRouter = require('./posts/postRouter')
const uRouter = require('./users/userRouter')
const cors = require('cors')

const server = express();

server.use(express.static(__dirname + '../client/build'))
server.use(cors())
server.use(express.json())


server.use(logger)
server.use('/api/posts', pRouter)
server.use('/api/users', uRouter)

server.get('/', (req, res) => {
  res.send(__dirname + '../client/build/index.html')
});

//custom middleware

function logger(req, res, next) {
  console.log(`${req.method} to ${req.originalUrl}`)
  next();
}

module.exports = server;
