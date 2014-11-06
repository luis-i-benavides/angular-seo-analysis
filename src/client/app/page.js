(function () {
    'use strict';

    angular
        .module('app.page', [])
        .service('Page', function () {
            var title,
                description,
                canonicalUrl,
                h1

            return {
                title: function () {
                    return title;
                },
                setTitle: function (newTitle) {
                    title = newTitle;
                },
                description: function () {
                    return description;
                },
                setDescription: function (newDescription) {
                    description = newDescription;
                },
                h1: function () {
                    return h1;
                },
                setH1: function (newH1) {
                    h1 = newH1;
                },
                canonicalUrl: function () {
                    return canonicalUrl;
                },
                setCanonicalUrl: function (newCanonicalUrl) {
                    canonicalUrl = newCanonicalUrl;
                }
            };
        });
})();