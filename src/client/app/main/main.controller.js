// Main Control
angular
    .module('app.main')
    .controller('MainCtrl', ['$scope', 'Page', function ($scope, Page) {
        $scope.Page = Page;
    }]);