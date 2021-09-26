var app=angular.module("moduleApp",[])
        .controller("firstController",($scope,$http,$log)=>{
            $http({
                method:'GET',
                url:'http://localhost:3000/employees'
                })
                .then((response)=>{
                    $scope.employees=response.data;
                    $log.info(response.data);
                })
                .catch((err)=>{
                    console.log(err);
                    $log.info(err);
                });
        });
        