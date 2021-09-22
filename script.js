var myApp= angular
            .module("myModule",[])
            .controller("myController",function($scope){
                // var employee={
                //     firstName:"Shailesh",
                //     lastName:"Rai",
                //     gender:"Male"
                // };
                // $scope.employee=employee;
                // var country={
                //     name:"India",
                //     capital:'New Delhi',
                //     flag:'/images/india.png'
                // }
                // $scope.country=country;

                // $scope.message="Shailesh";

                // var employees=[
                //     {firstName:"Tom",lastName:"Potter",gender:"Male"},
                //     {firstName:"Dick",lastName:"Mathews",gender:"Male"},
                //     {firstName:"Harry",lastName:"Weasly",gender:"Male"},
                //     {firstName:"Linda",lastName:"Gates",gender:"Female"},
                //     {firstName:"Maya",lastName:"Raj",gender:"Female"},
                // ];
                //$scope.employees=employees;

                // var countries=[
                //     {name:"India",cities:["New Delhi","Chandigarh","Ranchi"]},
                //     {name:"USA",cities:["New York","Washignton DC","Las Vegas"]},
                //     {name:"Japan",cities:["Tokyo","Osaka","Hokaido"]}
                // ];
                // $scope.countries=countries;

            //events
                // var programming=[
                //     {name:"java",likes:0,dislikes:0},
                //     {name:"c++",likes:0,dislikes:0},
                //     {name:"python",likes:0,dislikes:0},
                //     {name:"javascript",likes:0,dislikes:0},
                // ]

                // $scope.programming=programming;
                // $scope.incrementLike= function(language){
                //     language.likes++;
                // }
                // $scope.incrementDislike=function(language)
                // {
                //     language.dislikes++;
                // }

            //filters
            var employees=[
                {name:"Ben",dob:new Date('23 March 1998'),gender:'Male',salary:50000.98},
                {name:"Lee",dob:new Date('22 February 1994'),gender:'Male',salary:150000.90},
                {name:"Tom",dob:new Date('12 March 1996'),gender:'Female',salary:540000.68},
                {name:"Dick",dob:new Date('31 August 1998'),gender:'Male',salary:150000.198},
                {name:"Harry",dob:new Date('29 February 1992'),gender:'Female',salary:250080.98}
            ];

            $scope.employees=employees;
                
            });

          

// var myControlller = function ($scope){
//     $scope.message= "Angular JS tutorial";
// };

// myApp.controller("myController",myControlller);
// myApp.controller("myController",function($scope){
//     var employee={
//         firstName:"Shailesh",
//         lastName:"Rai",
//         gender:"Male"
//     };
//     $scope.employee=employee;
// });

// var myImg=angular
//                 .module("imgModule",[])
//                 .controller("imgController",($scope)=>{
//                         $scope.message="Yo Yo";
//                 });