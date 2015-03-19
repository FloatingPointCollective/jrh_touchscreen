angular
    .module('jrhApp')

    .controller('uiCtrl', ['$scope', '$rootScope', '$stateParams', '$state', 'WebSocket',  function($scope, $rootScope, $stateParams, $state, WebSocket) {
        //define global vars

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
        $scope.countDown = 10;
        $scope.timeoutTime = $scope.warnTime+$scope.countDown; //+10 seconds


        console.log($stateParams);
        //console.log($scope.mediaPlayer)
        window.$scope = $scope;

        //TIMEOUT
        $scope.idleTime = 0;

        //CONNECTION TIMER
        $scope.connectTimer = 0;

        // $scope.messages = MessagesService.get();
        // $scope.status = TestWebSocket.status();
        // var wsUri = "ws://127.0.0.1:9092"; //local
         var wsUri = "ws://45.19.216.114:9092"; //on site at P27
         


        $scope.topLevelPages = [
            {title:"Watch Jimmy's Story"},
            {title:"What Do You Stand For?"},
            {title:"Interactive Timeline"},
            {title:"The International Longshore and Warehouse Union"}
        ];

        $scope.aboutPages = [
            {label:'About the ILWU', id:'ilwu', displayHeading:true, hasImage:true, hide:true},
            {label:'About the Port of San Francisco', id:'port', displayHeading:false, hasImage:true},
            {label:'Credits', id:'credits', displayHeading:false, hasImage:false}
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
            else if(index === 2) {
                $state.go('timeline');
            }
            else if(index === 3) {
               // $state.go('about',{aboutId:'ilwu'});
               $state.go('about_ilwu');
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
            WebSocket.send('0');
            $rootScope.timelineScroll = 0;
        }

        //$scope.status = TestWebSocket.status();

        $scope.connectToServer = function(){
            clearInterval($scope.connectTimer);
            $scope.connectTimer = setInterval($scope.attemptConnection, 1000);
        }


        $scope.startPing = function(){
            //ping server ever 15s
            clearInterval($scope.connectTimer);
            $scope.connectTimer = setInterval($scope.pingServer, 15000);
        }

        $scope.pingServer = function(){
            WebSocket.send('ping');
        }

        $scope.attemptConnection = function(){
                WebSocket.new(wsUri);

                //ON OPEN
                WebSocket.onopen(function() {
                    console.log('connection open');
                    //WebSocket.send('Hello World');
                    //clear the connection timer
                    clearInterval($scope.connectTimer);
                    $scope.startPing();
                });

                //ON CLOSE
                WebSocket.onclose($scope.connectToServer);

                //ON MESSAGE
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
                        $scope.on = false;
                    } else if (event.data === 'on') {
                        if(!$scope.on){
                            console.log('turn on');
                            $state.go('home');
                            $scope.on = true;
                        }
                    }
                });

        }

        $scope.init = function(){

            window.ondragstart = function() { return false; } 
            $scope.connectToServer();

            //Increment the idle time counter.
            $scope.idleInterval = setInterval($scope.timerIncrement, 1000); // 1 second

        }

        $scope.onMouseMove = function(){
            $scope.resetTimeout();
        }

        $scope.onClick = function(){
            $scope.resetTimeout();
        }

        $scope.resetTimeout = function(){
            $scope.idleTime = 0;
            $scope.showTimeout = false;
            $scope.countDown = 10;
        }

        $scope.timerIncrement = function () {
            //only do if we are not already home
            if($state.current.name != 'home'){

                $scope.idleTime += 1;
                if ($scope.idleTime == $scope.warnTime) { // 5 minutes
                    $scope.timeoutWarning();
                }
                else if ($scope.idleTime == $scope.timeoutTime) { // 10 more seconds
                    $scope.timeout();
                }
                else if($scope.idleTime > $scope.warnTime){
                    $scope.countDown -= 1;
                    $scope.$apply();
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
            $scope.goHome();
            $scope.countDown = 10;
            $scope.$apply();
        }
}]);