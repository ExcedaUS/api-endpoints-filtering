angular.module("CustomerTrafficApp")
    .controller("AccountTrafficCtrl", ["$scope", "$routeParams", "$location", "CustomersInfoService", "AccountService", function ($scope, $routeParams, $location, CustomersInfoService, AccountService) {
        var pageId = $routeParams.id;
        AccountService.getAccounts(pageId).then(function (response) {
            $scope.accounts = response.data.data;
        })
    }])

    .filter("parseDate", function () {
        return function (date) {
            date = new Date(date).toString();
            console.log(date)
            return date
        };
    });
