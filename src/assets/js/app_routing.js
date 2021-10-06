app.config(function($stateProvider,$locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider.state({
        name:"dashboard",
        url:"/",
        controller:"base_controller",
        templateUrl:"static/dashboard.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load([
                    {
                        name:"ui.select",
                        serie:true,
                        files:[
                            "assets/vendors/bower_components/jquery/dist/jquery.min.js",
                            "assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js" 
                        ]
                    }
                ])
            }]
        }
    });
    $stateProvider.state({
        name:"add_list",
        url:"/add_list",
        controller:"base_controller",
        templateUrl:"static/add_list.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load([
                    {
                        name:"ui.select",
                        serie:true,
                        files:[
                            "assets/vendors/bower_components/jquery/dist/jquery.min.js",
                            "assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"
                        ]
                    }
                ])
            }]
        }
    });
    $stateProvider.state({
        name:"task",
        url:"/task",
        controller:"base_controller",
        templateUrl:"static/task.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load([
                    {
                        name:"ui.select",
                        serie:true,
                        files:[
                            "assets/vendors/bower_components/jquery/dist/jquery.min.js",
                            "assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"
                        ]
                    }
                ])
            }]
        }
    });
    $stateProvider.state({
        name:"archieve",
        url:"/archieve",
        controller:"base_controller",
        templateUrl:"static/archieve.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load([
                    {
                        name:"ui.select",
                        serie:true,
                        files:[
                            "assets/vendors/bower_components/jquery/dist/jquery.min.js",
                            "assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js"
                        ]
                    }
                ])
            }]
        }
    });
    $stateProvider.state({
        name:"trash",
        url:"/trash",
        controller:"base_controller",
        templateUrl:"static/trash.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load([
                    {
                        name:"ui.select",
                        serie:true,
                        files:[
                            "assets/vendors/bower_components/jquery/dist/jquery.min.js",
                            "assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js" 
                        ]
                    }
                ])
            }]
        }
    });
    $stateProvider.state({
        name:"profile",
        url:"/profile",
        controller:"base_controller",
        templateUrl:"static/profile.html",
        resolve:{
            deps:["$ocLazyLoad",function($ocLazyLoad){
                return $ocLazyLoad.load([
                    {
                        name:"ui.select",
                        serie:true,
                        files:[
                            "assets/vendors/bower_components/jquery/dist/jquery.min.js",
                            "assets/vendors/bower_components/bootstrap/dist/js/bootstrap.min.js" 
                        ]
                    }
                ])
            }]
        }
    });
})
