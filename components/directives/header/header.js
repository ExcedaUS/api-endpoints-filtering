angular.module("CustomerTrafficApp")
.directive("header", [function () {
    return {
        restrict: "EA",
        templateUrl: "components/directives/header/header.html"
    }
}])