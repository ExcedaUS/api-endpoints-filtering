var app = angular.module("CustomerTrafficApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
                templateUrl: "/components/home/home.html",
                controller: "HomeCtrl"
            })
            .when("/home/:customerId", {
                templateUrl: "components/customer/customer.html",
                controller: "CustomerCtrl"
            })
            .when("/account/:id", {
                templateUrl: "components/account/account.html",
                controller: "AccountTrafficCtrl"
            })
            //
            .otherwise("/home", {
                redirectTo: "/home"
            });
    }]);
