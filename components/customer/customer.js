angular.module("CustomerTrafficApp")
    .controller("CustomerCtrl", ["$scope", "$routeParams", "$location", "CustomersInfoService", "AccountService", function ($scope, $routeParams, $location, CustomersInfoService, AccountService) {
        CustomersInfoService.getCustomers().then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].id === $routeParams.customerId) {
                    $scope.customer = response.data[i];
                    AccountService.getAccounts($scope.customer.id).then(function (response) {
                        $scope.accounts = (response.data);
                        $scope.reRoute = function(i) {
                        $location.path("/account/" + $scope.accounts.accountId);
                    }
                    });
                }
            }
        });     
    }])

