app.service("AccountService", ["$http", function($http){
    this.getAccounts = function (id) {
        return $http.get("https://xcd-eval.staging.xcdn.io/xcd/traffic/" + id)
    };
}]);