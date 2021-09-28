var uiApp = angular.module('uiApp',['ui.router'])
            .config(function($stateProvider,$urlMatcherFactoryProvider,$urlRouterProvider,$locationProvider){
               //case insensitive
                $urlMatcherFactoryProvider.caseInsensitive(true);
                //default routing
                $urlRouterProvider.otherwise('/home');
                $stateProvider
                .state('home',{
                    url:'/home',
                    templateUrl:'templates/home.html',
                    controller:'homeController',
                    controllerAs:'homeCtrl',
                    data:{
                        customData:"Home custom data"
                    }
                })
                .state('courses',{
                    url:'/courses',
                    templateUrl:'templates/courses.html',
                    controller:'courseController',
                    controllerAs:'courseCtrl',
                    data:{
                        customData:"courses custom data"
                    }
                })
                .state('students',{
                    url:'/students',
                    templateUrl:'templates/students.html',
                    controller:'studentController',
                    controllerAs:'studentCtrl',
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
                    },
                   // abstract:true
                })
                .state('studentDetail',{
                   // parent:'students',
                    url:'/student/:id',
                    templateUrl:'templates/studentDetails.html',
                    controller:'studentDetailController',
                    controllerAs:'studentDetailCtrl'
                })

               // $locationProvider.html5Mode(true);
            });

        uiApp.controller('homeController',function ($scope,$state) {
                $scope.title="Homepage";
                this.customData=$state.current.data.customData;
                this.courseCustomData=$state.get('courses').data.customData;
            });

        uiApp.controller('courseController',function($scope,$state){
            $scope.courses=['JAVA','Angular','Python','Hadoop','JavaScript'];
            this.customData=$state.current.data.customData;
        });

        uiApp.controller('studentController',function(studentList,$state,$location){
            var vm=this;
            vm.reloadData = function(){
                $state.reload();
            }
            vm.students=studentList;
        });

        uiApp.controller('studentDetailController',function($http,$stateParams,$scope) {
            //var vm=this;
            console.log("in controller");
           $http({
                method:'GET',
                url:'http://localhost:3000/student',
                params:{id: $stateParams.id}
            }).then(function(response){
                console.log(response)
                    $scope.student=response.data;
            }).catch(function(err){
                console.log(err);
            })
        })