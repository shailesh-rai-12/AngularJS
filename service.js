 var app=angular.module("myModule",[])
            .controller("transformController",($scope,stringService)=>{

                $scope.transformString = function(input){
                    $scope.output=stringService.processString(input);
                }


            });