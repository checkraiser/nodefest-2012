var secure = require('secure-peer');
var peer = secure(require('./c.json'));

var net = require('net');
var server = net.createServer(function (rawStream) {
    var sec = peer(function (stream) {
        stream.on('data', function (buf) {
            stream.write(String(buf).toUpperCase());
        });
    });
    sec.pipe(rawStream).pipe(sec);
});
server.listen(5000);

// ./run4.sh
