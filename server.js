var express = require('express');
var app = express();
require('./dbConnection');
let router = require('./routes/routes');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);


var port = process.env.port || 6000;
http.listen(port, () => {
    console.log('App listening to: ' + port);
});