// set up application website
var express = require('express');
var app = express();
var port = 8080;

// set static file location
app.use(express.static(__dirname + '/public'));

// route all requests to a single page web application
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html'); //
});

// start server
app.listen(port);
console.log('Listening on port ' + port);
