var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var static  = require('express-static');

app.use("/audio", static(__dirname + '/audio'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  socket.on('play', function(data){
      console.log('playing');
      console.log(data);
    io.emit('play', data);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

