var app = angular.module("CustomerTrafficApp")
app.controller("HomeCtrl", ["$scope", "CustomersInfoService", function ($scope, CustomersInfoService) {
    $scope.findCustomer = function (customer) {
        CustomersInfoService.getCustomers().then(function (response) {
            $scope.customers = response.data;
            console.log(response.data)
        });
    }
}])


