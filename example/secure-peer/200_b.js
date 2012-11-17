var secure = require('secure-peer');
var peer = secure(require('./b.json'));

var net = require('net');
var rawStream = net.connect(5000);

var sec = peer(function (stream) {
    stream.pipe(process.stdout);
    stream.end('beep boop\n');
});
sec.pipe(rawStream).pipe(sec);

var pubkeys = { a : require('./a.json').public };

sec.on('identify', function (id) {
    var key = id.key.public;
    console.log(key);
    
    if (key !== pubkeys.a) {
        console.log('!!! REJECTED !!!')
        id.reject()
    }
    else id.accept()
});

// ./run3.sh
