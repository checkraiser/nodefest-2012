var secure = require('secure-peer');
var peer = secure(require('./a.json'));

var net = require('net');

var sec = peer(function (stream) {
    // ...
});
