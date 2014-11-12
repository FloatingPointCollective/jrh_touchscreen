angular
    .module('jrhApp', [
        'ui.router'
    ])

    .run(['$state', '$stateParams', '$rootScope' , function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.transitionTo('home');
    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/'); //if this is turned on the synopsis routing breaks

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'uiCtrl'
            })
             .state('about', {
                // abstract: true,
                url: '/about/:aboutId',
                templateUrl: 'templates/about.html',
                controller: 'uiCtrl' 
            })
            .state('issues', {
                url:'/issues',
                templateUrl: 'partials/issues_pages/issues.html',
                controller: 'issuesController'
            })
            .state('quote', {
                url:'/issues/:issue',
                templateUrl: 'partials/issues_pages/issues.quote.html',
                controller: 'issuesController'
            })
            .state('synopsis', {
                url:'issues/synopsis/:issue',
                templateUrl: 'partials/issues_pages/issues.synopsis.html',
                controller: 'issuesController'
            })
            // .state('video', {
            //     url:'jimmy-story',
            //     templateUrl:'partials/video_pages/video.html',
            //     controller: 'uiCtrl'
            // })
        }])
