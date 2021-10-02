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
    var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiW3tcImNyZWF0ZWRfb25cIjogXCIyMDIxLTA3LTI5IDEzOjM2OjA0LjQxMTQ0MVwiLCBcImVtYWlsXCI6IFwia2FseWFuaWJoYWxla2FyQGdtYWlsLmNvbVwiLCBcImZ1bGxfbmFtZVwiOiBcImJoYWxla2FyXCIsIFwiaWRcIjogMiwgXCJwYXNzd29yZFwiOiBcIjEyMzMyMVwiLCBcInBob25lXCI6IFwiOTc2ODM2MDkwNVwiLCBcInN0YXR1c1wiOiBcImFcIn1dIiwiZXhwIjoxNjM5NzMxMzQyfQ.uD6To9TagFdxGLOaQSiNcYL0yGYYMiIhRrhMq2Ry5TU";
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
        add_list:function(){

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