// Main Control
angular
    .module('app.main')
    .controller('mainCtrl', ['$scope', 'Page', function ($scope, Page) {
        $scope.Page = Page;
    }]);