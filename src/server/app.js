/*jshint node:true*/
'use strict';

var express      = require('express');
var app          = express();
var port         = process.env.PORT || 8626;

var environment = process.env.NODE_ENV;

console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.use(require('prerender-node').set('prerenderToken', 'xLmdV8Et5kavIbrtBaJE'));
app.use('/', express.static('./src/client'));
app.use('/', express.static('./'));


app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});