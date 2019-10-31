// code away!
require('dotenv').config()
const express = require('express');
const server = require("./server/server")
const port = process.env.PORT

server.use(express.static(__dirname + '/client/build'))

server.get('/', (req, res) => {
    res.send(__dirname + '/client/build/index.html')
  });

server.listen(port, () => {
    console.log('Listening to ' + (port))
})