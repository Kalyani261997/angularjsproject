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
        }
    })
}(angular));

var app = angular.module("keepnotes",["ui.router","ngLoadScript","ocLazyLoad"]);
app.controller("base_controller",function($scope,$state,$http,$httpParamSerializer){

})