var uiApp = angular.module('uiApp',['ui.router'])
            .config(['$stateProvider',function($stateProvider){
                $stateProvider
                .state('home',{
                    url:'/home',
                    templateUrl:'templates/home.html',
                    controller:'homeController',
                })
            }])
            .controller('homeController',function ($scope) {
                $scope.title="Homepage";
            });