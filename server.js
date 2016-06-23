var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    url = require('url'),
    shell = require('shelljs'),
    
    port = 3000;

app.use('/static', express.static(__dirname + '/node_modules'));
app.use('/synth.css', express.static(__dirname + '/synth.css'));
app.use('/synth.js', express.static(__dirname + '/synth.js'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/synth.html');
});

io.on('connection', function (socket){
    socket.on('play', function (msg) {
        var command = 'play -qn synth 2 pluck ' + msg;
        shell.exec(command, {async: true});
    });
});

http.listen(port, function () {
    console.log('Synth started at http://localhost:' + port + '/');
});
