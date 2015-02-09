angular
    .module('jrhApp', [
        'ui.router',
        'mediaPlayer',
        'angular-websocket'
    ])

    .run(['$state', '$stateParams', '$rootScope' , function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        window.$root = $rootScope;
        $state.transitionTo('home');
    }])
    
    .config(['$stateProvider', '$urlRouterProvider', 'WebSocketProvider', function ($stateProvider, $urlRouterProvider, WebSocketProvider) {
        // $urlRouterProvider.otherwise('/'); //if this is turned on the synopsis routing breaks

        WebSocketProvider
            .prefix('')
            .uri('ws://127.0.0.1:9092/'); //swap for different server address/port

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'main': {
                        templateUrl: 'templates/home.html',
                        controller: 'uiCtrl'
                    },
                    'footer': {
                        templateUrl: 'templates/footer_default.html',
                        controller: 'uiCtrl'
                    }
                }
            })
             .state('about', {
                // abstract: true,
                url: '/about/:aboutId',
                views: {
                    'main': {
                        templateUrl: 'templates/about.html',
                        controller: 'uiCtrl' 
                    },
                    'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }
            })
            .state('issues', {
                url:'/issues',
                views: {
                    'main': {
                        templateUrl: 'partials/issues_pages/issues.html',
                        controller: 'issuesController'
                    },
                    'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }  
            })
            .state('quote', {
                url:'/issues/:issue',
                views: {
                    'main': {
                        templateUrl: 'partials/issues_pages/issues.quote.html',
                        controller: 'issuesController'
                    },
                    'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }
            })
            .state('synopsis', {
                url:'issues/synopsis/:issue',
                views: {
                    'main': {
                        templateUrl: 'partials/issues_pages/issues.synopsis.html',
                        controller: 'issuesController'
                    },
                    'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }
            })
            .state('video', {
                url:'jimmy-story',
                views: {
                    'main': {
                        templateUrl:'partials/video_pages/video.html',
                        controller: 'videoController'
                    },
                     'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }
            })
            .state('timeline', {
                url:'timeline',
                views: {
                    'main': {
                        templateUrl:'partials/timeline.html',
                        controller: 'timelineController'
                    },
                     'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }
            })
            .state('timeline_detail', {
                url:'timeline/detail/:image',
                views: {
                    'main': {
                        templateUrl: 'partials/section_detail.html',
                        controller: 'timelineController'
                    },
                    'footer': {
                        templateUrl: 'templates/footer_secondary.html',
                        controller: 'uiCtrl'
                    }
                }
            })
            .state('black', {
                url:'/',
                views: {
                    'main': {
                        templateUrl: 'templates/off.html',
                        controller: 'uiCtrl'
                    },
                    'footer': {
                        template: '<div class="container" style="background:rgba(0,0,0,1)" height="100px"></div>',
                        controller: 'uiCtrl'
                    }
                }
            })
        }]);


