var app=angular.module("moduleApp",[])
        .controller("firstController",($scope,$http)=>{
            $http.get('localhost:3000/customers')
                .then((response)=>{
                    console.log(response);
                })
                .catch((err)=>{
                    console.log(err);
                });
        });
        