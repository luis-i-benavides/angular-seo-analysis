/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8626;
var prerender = require('prerender-node').set('prerenderToken', 'xLmdV8Et5kavIbrtBaJE');
var crawler = require('./crawler');
var sitemap = require('sitemap');
var Promise = require("bluebird");
var fs = require('fs');
var url = require('url');

var environment = process.env.NODE_ENV;
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.use(prerender);
app.use('/', express.static('./src/client'));
app.use('/', express.static('./'));

// Any route that would otherwise throw a 404 (Not Found) will return the
// home page, so that the client, in HTML5 mode, attempts to navigate to a potential deep link.
app.get('*', function (request, response) {
    response.sendfile('./src/client/index.html');
});

app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());

/*
    Promise.promisify(crawler.crawl)('http://localhost:' + port).then(function (urls) {
        var homeUrl = process.env.HOME_URL || 'http://localhost:' + port;
        var sm = sitemap.createSitemap({
            hostname: homeUrl
        });

        urls.forEach(function(aUrl){
            sm.add({url: url.parse(aUrl).path});
        });

        sm.toXML(function (xml) {
            fs.writeFile('sitemap.xml', xml);
        });
    });
*/
});