const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();

const server = jsonServer.create()
const apiRouter = jsonServer.router('api/db.json')

server.use('/api', apiRouter)

server.use(express.static(__dirname + '/dist/pi-front'));

server.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/pi-front/index.html'));
});

server.listen(process.env.PORT || 8080);