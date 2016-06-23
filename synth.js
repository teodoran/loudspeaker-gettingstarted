if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

var socket = io();

var play = function (note) {
    socket.emit('play', note);
};
