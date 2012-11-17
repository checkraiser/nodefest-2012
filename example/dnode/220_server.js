var net = require('net');
var dnode = require('dnode');

var secure = require('secure-peer');
var peer = secure(require('./b.json'));

var server = net.createServer(function (rawStream) {
    var sec = peer(function (stream) {
        var d = dnode({
            louder : function (s, cb) {
                cb(s.toUpperCase())
            }
        });
        d.pipe(stream).pipe(d);
    });
    sec.pipe(rawStream).pipe(sec);
});
server.listen(8000);
