var net = require('net');
var dnode = require('dnode');

var secure = require('secure-peer');
var peer = secure(require('./a.json'));

var rawStream = net.connect(8000);
var sec = peer(function (stream) {
    var d = dnode();
    d.on('remote', function (remote) {
        remote.louder('beep boop', function (s) {
            console.log(s);
        });
    });
    // ...
});
sec.pipe(rawStream).pipe(sec);
