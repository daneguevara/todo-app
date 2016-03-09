// set up application website
var express = require('express');
var app = express();
var port = 8080;

app.get('*', function(req, res) {
    res.sendfile('index.html'); // load single page web application
});

app.listen(port);
console.log('Listening on port ' + port);
