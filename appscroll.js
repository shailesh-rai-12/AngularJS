
var mod=angular.module('myApp',[])
                .controller('appController',($scope,$location,$anchorScroll)=>{
                        $scope.scrollTo=(scrollPosition)=>{
                                $location.hash(scrollPosition);
                                //$anchorScroll.yOffset=10;
                                $anchorScroll();
                        }
                })