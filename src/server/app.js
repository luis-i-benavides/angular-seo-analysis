/*jshint node:true*/
'use strict';

var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8626;

var environment = process.env.NODE_ENV;

console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

app.use('/', express.static('./src/client'));
app.use('/', express.static('./'));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});