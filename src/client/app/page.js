// Page
angular
    .module('app')
    .service('Page', function () {
        var title = 'ACME Locksmiths, Super fast!';
        var description = 'We provide Fast & Reliable locksmith services to over 20+ locations in the Orlando, FL area. Give us a call | 1(407)387-4512';

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
            }
        };
    });