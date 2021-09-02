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

    $scope.task={
        created_by:1,
    }
    $scope.add_task=function(){
        $http({
            url:"http://localhost:5153/add_task",
            method:"POST",
            data:$httpParamSerializer($scope.task),
            success:function(res){
                console.log(res);
            }
        });
    }
    $scope.states={
        dashboard:function(){
            $http({
                url:"http://localhost:5153/show_list",
                method:"GET"
            }).then(function(res){
                console.log(res.data.data);
                $scope.showlist = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        archieve:function(){
            $http({
                url:"http://localhost:5153/archieve_list",
                method:"GET"
            }).then(function(res){
                console.log(res.data.data);
                $scope.archievelist = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        trash:function(){
            $http({
                url:"http://localhost:5153/trash_list",
                method:"GET"
            }).then(function(res){
                console.log(res.data.data);
                $scope.trashlist = res.data.data;
            },function(error){
                console.log(error);
            });
        },
        profile:function(){
            $http({
                url:"http://localhost:5153/users/get_single_user_details/1",
                method:"GET"
            }).then(function(res){
                console.log(res.data.data);
            },function(error){
                console.log(error);
            });
        },
    }
    $scope.states[state]();
})