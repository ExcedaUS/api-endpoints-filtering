app.service("CustomersInfoService", ["$http", function ($http) {
    this.getCustomers = function () {
        return $http.get('https://xcd-eval.staging.xcdn.io/xcd/customer/list')
    }
}]);
