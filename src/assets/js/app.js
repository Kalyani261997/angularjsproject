(function(ng){
    'use strict';
    var app = ng.module("ngLoadScript",[]);
    app.directive("script",function(){
        return {
            restrict:'E',
            scope:false,
            link:function(scope,element,attr){
                if(attr.type==="text/javascript-lazy"){var sc = document.createElement("script");
                sc.type="text/javascript";
                var src_obj=element.attr("src");
                if(src_obj !== undefined){
                    sc.src=src_obj;
                }
                else{
                    var code=element.text();
                    sc.text=code;
                }
                document.body.appendChild(sc);
                element.remove();
            }
            }
        };
    })
}(angular));

var app = angular.module("keepnotes",["ui.router","ngLoadScript","oc.lazyLoad"]);
app.controller("base_controller",function($scope,$state,$http,$httpParamSerializer){
    console.log($state.current.name);
    var state = $state.current.name;
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjpbeyJjcmVhdGVkX29uIjoiMjAyMS0wNy0yOSAxMzozNjowNC40MTE0NDEiLCJlbWFpbCI6ImthbHlhbmliaGFsZWthckBnbWFpbC5jb20iLCJmdWxsX25hbWUiOiJiaGFsZWthciIsImlkIjoyLCJwYXNzd29yZCI6IjEyMzMyMSIsInBob25lIjoiOTc2ODM2MDkwNSIsInN0YXR1cyI6ImEifV0sImV4cCI6MTY0MjIyOTcxMH0.f2sZJYCERByYLsLo7RbK9syujvLfST0_RTClkOX6ZIw"
    var host = "http://localhost:5155";


    $scope.list={
    
    }
    $scope.add_list=function(){
        console.log($scope.list);
        $http({
            url: host+"/add_task_list",
            method: "POST",
            data: $httpParamSerializer($scope.list),
            headers : {
                "Authorization" : "Bearer "+token,
                "Content-Type": "application/x-www-form-urlencoded"
            },
            success:function(res){
                location.reload();
            }
        });
    }
    var params = new URLSearchParams(window.location.search);
    $scope.list_id = params.get("lid");

    $scope.a_task = {
        "abc":"cba"
    }
    $scope.add_task=function(task){
        console.log($scope.a_task);
        $http({
            url: host+"/task/add_task/"+$scope.list_id,
            method: "POST",
            data : $httpParamSerializer($scope.a_task),
            headers : { 
                "Authorization" : "Bearer "+token,
                "Content_type": "application/x-www-form-urlencoded"
            },
            success:function(res){
                location.reload();
            }
        });
    }
    

    $scope.states={
        dashboard:function(){
            $http({
                url: host+"/show_list",
                method:"GET",
                headers : {
                    "Authorization" : "Bearer "+token,
                },
            }).then(function(res){
                console.log(res.data.data);
                $scope.showlist = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        task:function(){
            $http({
                url: host+"/task/read_task/"+$scope.list_id,
                method:"GET",
                headers : {
                    "Authorization" : "Bearer "+token,
                },
            }).then(function(res){
                // console.log(res);
                $scope.task = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        add_list:function(){

        },
        add_task:function(){

        },
        archieve:function(){
            $http({
                url: host+"/archieve_list",
                method:"GET",
                headers : {
                    "Authorization" : "Bearer "+token,
                },
            }).then(function(res){
                console.log(res.data.data);
                $scope.archievelist = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        trash:function(){
            $http({
                url: host+"/trash_list",
                method:"GET",
                headers : {
                    "Authorization" : "Bearer "+token,
                },
            }).then(function(res){
                console.log(res.data.data);
                $scope.trashlist = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        profile:function(){
            $http({
                url: host+"/users/get_single_user_details/1",
                method:"GET",
                headers : {
                    "Authorization" : "Bearer "+token,
                },
            }).then(function(res){
                console.log(res.data.data);
                $scope.profile=res.data.data[0];
                console.log(error);
            });
        },
    }
    $scope.states[state]();
})