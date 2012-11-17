var net = require('net');
var dnode = require('dnode');

var secure = require('secure-peer');
var peer = secure(require('./a.json'));

var stream = net.connect(8000);
var d = dnode();
d.on('remote', function (remote) {
    remote.louder('beep boop', function (s) {
        console.log(s);
    });
});
d.pipe(stream).pipe(d);
