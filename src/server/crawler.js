var Browser = require('zombie');
var url = require('url');

var browserOpts = {
    waitFor: 500,
    loadCSS: false,
    runScripts: true
}

function crawlPage(idx, urls, callback) {
    if (idx < urls.length) {
        var uri = urls[idx];
        var browser = new Browser(browserOpts);
        browser.on("error", function (error) {
            callback(error, null);
        });
       // loop through urls on this site
        browser.visit(uri).
            then(function () {
                browser.wait(function () {
                    var links = browser.queryAll('a');
                    links.forEach(function (link) {
                        var href = link.getAttribute('href');
                        if (href && href !== '#' && href !== '/') {
                            var absUrl = url.resolve(uri, href);
                            if (urls.indexOf(absUrl) < 0) {
                                urls.push(absUrl);
                            }
                        }
                    });
                    crawlPage(idx + 1, urls, callback);
                });
            }).
            catch(function (error) {
                callback(error, null);
            });
    } else {
        callback(null, urls);
    }
}

module.exports = {
    crawl: function (startingUrl, callback) {
        startingUrl = startingUrl || 'http://localhost';
        crawlPage(0, [startingUrl], callback);
    }
};