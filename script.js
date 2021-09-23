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
                {name:"Ben",dob:new Date('23 March 1998'),gender:1,city:'Mumbai',salary:50000.918},
                {name:"Lee",dob:new Date('22 February 1994'),gender:1,city:'Kolkata',salary:150000.90},
                {name:"Tom",dob:new Date('12 March 1996'),gender:2,city:'Ranchi',salary:540000.618},
                {name:"Dick",dob:new Date('31 August 1998'),gender:3,city:'Ranchi',salary:150000.198},
                {name:"Harry",dob:new Date('29 February 1992'),gender:2,city:'Chandigarh',salary:250080.98}
            ];

            $scope.employees=employees;
            $scope.displayType="table";
            $scope.employeesView= function()
            {
                if($scope.displayType=="table")
                {
                    return 'employeeTable.html'
                }else{
                    return 'employeeList.html';
                }
            }
            $scope.salaryState=true;
            $scope.search=function (item) {
                if($scope.searchText==undefined)
                {
                    return true;
                }else{
                   
                    if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 || item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1  )
                    {
                        //console.log(item);
                        return true;
                        
                    }

                    return false;
                }
                
            }
            //$scope.rowLimit=3;
            $scope.sortColumn="name";
            $scope.reverseSort=false;

            $scope.sortData=function(column) {

                if($scope.sortColumn==column)
                    $scope.reverseSort=!$scope.reverseSort;
                else
                    $scope.reverseSort=false;
                
                $scope.sortColumn=column;
                   
            }

            $scope.getSortClass=function(column) {
                if($scope.sortColumn==column)
                    if($scope.reverseSort)
                        return 'fa-arrow-up';
                    else
                        return 'fa-arrow-down';

                return ''; 
            }
                
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