
var myApp=angular.module('myApp',["ngRoute"])
                    .config(function($routeProvider,$locationProvider){
                        $locationProvider.caseInsensitiveMatch=true;
                            $routeProvider
                                        .when("/home", {
                                           templateUrl:"templates/home.html" ,
                                           controller:"homeController"
                                        })
                                        .when("/courses",{
                                            templateUrl:"templates/courses.html",
                                            controller:"courseController",
                                        })
                                        .when("/students",{
                                            templateUrl:"templates/students.html",
                                            controller:"studentController as studentCtrl", 
                                            resolve:{
                                                studentList:function($http){
                                                    
                                                    return $http({
                                                        method:'GET',
                                                        url:'http://localhost:3000/students'
                                                    })
                                                    .then((response)=>{
                                                        //vm.students
                                                        return response.data;
                                                    })
                                                    .catch((err)=>{
                                                        console.log(err);
                                                        //$log.info(err);
                                                    })
                                                }
                                            }
                                            
                                        })
                                        .when("/student/:studentId",{
                                            templateUrl:'templates/studentDetails.html',
                                            controller:'studentDetailController'
                                        })
                                        .otherwise({
                                            template:"<h1>page not found</h1>"
                                        })
                            //removing hash symbol
                            //$locationProvider.html5Mode(true);
                    })
                    .controller('homeController',function($scope){
                        $scope.title="Home Page";
                    })
                    .controller('courseController',function($scope){
                        $scope.courses=['JAVA','Angular','Python','Hadoop','JavaScript'];
                    })
                    .controller('studentController',function($scope,$route,studentList){
                        //$locationChangeStart
                        //$routeChangeStart
                        //$locationChangeSuccess
                        //$routeChangeSuccess
                        $scope.$on("$locationChangeStart", function(event,next,current){
                            //if(!confirm('Do you really want to navigate to '+next.$$route.originalPath)){
                                if(!confirm('Do you really want to navigate to '+next)){
                                    event.preventDefault();
                            }
                        });
                        var vm=this;
                        vm.reloadData = function(){
                            $route.reload();
                        }
                        vm.students=studentList;
                            
                    })
                    .controller('studentDetailController',function($scope,$http,$routeParams){
                                $http({
                                    method:'GET',
                                    url:'http://localhost:3000/student',
                                    params:{id:$routeParams.studentId}
                                })
                                .then((response)=>{
                                        $scope.student=response.data;
                                })
                    })