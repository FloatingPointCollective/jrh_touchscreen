angular
    .module('jrhApp')

    .controller('uiCtrl', ['$scope', '$stateParams', '$state', 'WebSocket', function($scope, $stateParams, $state, WebSocket) {
        $scope.showMouse = true;
        $scope.videoPlaying = false;
        $scope.activeVideoName = "";
        $scope.footerMenuIsHidden = false;
        $scope.showHomeScreen = true;
        
        $scope.debug = false;
        $scope.aboutId = $stateParams.aboutId;

        console.log($stateParams);
        //console.log($scope.mediaPlayer)
        window.$scope = $scope;


        // $scope.messages = MessagesService.get();
        // $scope.status = TestWebSocket.status();
        var wsUri = "ws://127.0.0.1:9092";

        $scope.topLevelPages = [
            {title:"Watch Jimmy's Story"},
            {title:"What Do You Stand For?"},
            {title:"Timeline"}
        ];

        $scope.aboutPages = [
            {label:'About the ILWU', id:'ilwu'},
            {label:'SF Port Commission', id:'port'},
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

        WebSocket.onopen(function() {
            console.log('connection open');
            WebSocket.send('Hello World');
        });

        WebSocket.onclose(function() {
            console.log('connection closed');
        });

        WebSocket.onmessage(function(event) {
            console.log('message: ', event.data);
        });
}]);