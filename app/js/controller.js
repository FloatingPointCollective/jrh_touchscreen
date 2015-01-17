angular
    .module('jrhApp')

    .controller('uiCtrl', ['$scope', '$rootScope', '$stateParams', '$state', 'WebSocket',  function($scope, $rootScope, $stateParams, $state, WebSocket) {
        $scope.showMouse = true;
        $scope.videoPlaying = false;
        $scope.activeVideoName = "";
        $scope.footerMenuIsHidden = false;
        $scope.showHomeScreen = true;
        $scope.showTimeout = false;
        
        $scope.debug = false;
        $scope.aboutId = $stateParams.aboutId;
        $scope.idleInterval;
        $scope.warnTime = 60*5; //5 minutes in seconds
        $scope.timeoutTime = $scope.warnTime+10; //10 seconds

        console.log($stateParams);
        //console.log($scope.mediaPlayer)
        window.$scope = $scope;

        //TIMEOUT
        $scope.idleTime = 0;

        //CONNECTION TIMER
        $scope.connectTimer = 0;

        // $scope.messages = MessagesService.get();
        // $scope.status = TestWebSocket.status();
         var wsUri = "ws://192.168.0.4:9092";

        $scope.topLevelPages = [
            {title:"Watch Jimmy's Story"},
            {title:"What Do You Stand For?"}
            // {title:"Timeline"}
        ];

        $scope.aboutPages = [
            {label:'About the ILWU', id:'ilwu'},
            {label:'About the SF Port Commission', id:'port'},
            {label:'Credits', id:'credits'},
        ];

        $scope.onKeyUp = function ($event) {
            //hide/show cursor on spacebar
            if($event.keyCode === 32){
                $scope.showMouse = ! $scope.showMouse;
                $scope.debug = !$scope.debug;
                console.log('debug = '+$scope.debug);
            }
        };

        $scope.onTopLevelClick = function(index){
            if(index === 0) {
                $state.go('video');
                $scope.hideFooterMenu();

            } else if(index === 1) {
                $state.go('issues');
            }
        }

        $scope.hideFooterMenu = function(){
            $scope.footerMenuIsHidden = true;
        }

        $scope.showFooterMenu = function(){
            $scope.footerMenuIsHidden = false;
        }

        $scope.goHome = function(){
            $state.go('home');
        }

        //$scope.status = TestWebSocket.status();

        $scope.init = function(){

        WebSocket.onopen(function() {
            console.log('connection open');
            WebSocket.send('Hello World');
            //clear the connection timer
            clearInterval($scope.connectTimer);
        });

        WebSocket.onclose(function() {
            console.log('connection closed');
            
            $scope.connectTimer = setInterval( function() {
                WebSocket.new(wsUri);
                WebSocket.onopen(function() {
                    console.log('connection open');
                    WebSocket.send('Hello World');
                    //clear the connection timer
                    clearInterval($scope.connectTimer);
                });

                WebSocket.onmessage(function(event) {
                    console.log("got message: "+event.data);
                    if(event.data === 'mute') {

                        console.log("go mute message");
                        $rootScope.muted = true; //set muted global variable to true
                        console.log("$rootScope.muted: "+$rootScope.muted);
                        $rootScope.$broadcast('mute', true); //broadcast muted global variable as true

                    } else if (event.data === 'unmute') {

                        $rootScope.muted = false; //set muted global variable to false
                        console.log("$rootScope.muted: "+$rootScope.muted);
                        $rootScope.$broadcast('mute', false); //broadcast muted global variable as false
                        
                        console.log('unmute video');

                    } else if (event.data === 'off') {
                        console.log('turn off');
                        $state.go('black');
                    } else if (event.data === 'on') {
                        console.log('turn on');
                        $state.go('home');
                    }
                });

            }, 1000); 
            //insert callback to reconnect
            //start connection timer
        });

        WebSocket.onmessage(function(event) {
            console.log("got message: "+event.data);
            if(event.data === 'mute') {

                console.log("got mute message");
                $rootScope.muted = true; //set muted global variable to true
                console.log("$rootScope.muted: "+$rootScope.muted);
                $rootScope.$broadcast('mute', true); //broadcast muted global variable as true

            } else if (event.data === 'unmute') {

                $rootScope.muted = false; //set muted global variable to false
                console.log("$rootScope.muted: "+$rootScope.muted);
                $rootScope.$broadcast('mute', false); //broadcast muted global variable as false
                
                console.log('unmute video');

            } else if (event.data === 'off') {
                console.log('turn off');
                $state.go('black');
            } else if (event.data === 'on') {
                console.log('turn on');
                $state.go('home');
            }
        });

            //Increment the idle time counter.
            $scope.idleInterval = setInterval($scope.timerIncrement, 1000); // 1 second

        }

        $scope.onMouseMove = function(){
            $scope.resetTimeout();
            console.log("onMouseMove: "+$scope.idleTime);
        }

        $scope.onClick = function(){
            $scope.resetTimeout();
            console.log("onMouseMove: "+$scope.idleTime);
        }

        $scope.resetTimeout = function(){
            $scope.idleTime = 0;
            $scope.showTimeout = false;
        }

        $scope.timerIncrement = function () {
            //only do if we are not already home
            if($state.current.name != 'home'){

                $scope.idleTime += 1;
               // console.log("time increment: "+$scope.idleTime);
                if ($scope.idleTime == $scope.warnTime) { // 5 minutes
                    $scope.timeoutWarning();
                }
                else if ($scope.idleTime == $scope.timeoutTime) { // 10 more seconds
                    $scope.timeout();
                }
            }
        }

        $scope.timeoutWarning = function(){
            //show timout warning message...
            $scope.showTimeout = true;
            $scope.$apply();
        }

        $scope.timeout = function(){
            $scope.idleTime = 0;
            $scope.showTimeout = false;
            $state.go('home');
            $scope.$apply();
        }
}]);