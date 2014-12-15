angular
    .module('jrhApp')
    .controller('videoController', ['$scope', '$stateParams', '$state', 'WebSocket', function($scope, $stateParams, $state, WebSocket) {
        $scope.videoPlaying = false;

        $scope.videoPlaylist = [
            {src: 'video/jimmy_story.mp4', type: 'video/mp4'}
        ];

        // $scope.onKeyUp = function ($event) {
        //     //toggle Volume on 'v' or 'V'
        //     if($event.keyCode === 86 || $event.keyCode === 118){
        //         $scope.videoPlaylist.toggleMute();
        //         console.log('volume = ' + $scope.videoPlaylist.volume);
        //     }
        // };

        // $scope.keyPress = function(keyCode){
        //     console.log(keyCode); 
        // }

        // $scope.keypressCallback = function($event) {
        //     console.log('keypress');
        //     alert('Voila!');
        //     $event.preventDefault();
        // };

        window.$vscope = $scope;
        console.log('HERE', $scope.player);

        setTimeout(function(){
            $scope.player.play();
            $scope.player.on('ended', function(){
                console.log('ended');
                $state.go('home');
                $scope.showFooterMenu();
            })
        },0);
}]);