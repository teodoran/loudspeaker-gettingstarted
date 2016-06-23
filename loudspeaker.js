var socket = require('socket.io-client')(process.argv[2] || 'http://localhost:3000');

socket.on('connect', function () {
    console.log('Loudspeaker is connected');
});

socket.on('client:display', function () {
    // Or some other node.js sound synthesis library.
    console.log('Use flocking.js to play sounds here');
});