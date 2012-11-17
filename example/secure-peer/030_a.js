var secure = require('secure-peer');
var peer = secure(require('./a.json'));

var sec = peer(function (stream) {
    // ...
});
