var express = require('express');
var app = express();
var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var socket = require('./src/gameController.js')(io);

app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log("listening on port" + port);
});