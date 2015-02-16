angular
    .module('jrhApp')
    .controller('videoController', ['$scope', '$rootScope', '$stateParams', '$state',  function($scope, $rootScope, $stateParams, $state) {
        $scope.videoPlaying = false;

        $scope.videoPlaylist = [
            {src: 'video/jimmy_story.mp4', type: 'video/mp4'}
        ];

        // receive control events while video is loaded
        $rootScope.$on('mute', function(event, data) {
            console.log('received muteEvent: '+data);
            $scope.player.setVolume(!data);
        });

        window.$vscope = $scope;
        console.log('HERE', $scope.player);

        
        $scope.interval = setTimeout(function(){

            $scope.player = document.getElementById("jimmy-video");
           // $scope.player.seek(0); //will this help the issue of the video not loading again if played for the second time?
            $scope.player.play();

            console.log("$rootScope.muted: "+$rootScope.muted);

            // when video is loaded, set volume property to muted global variable
            $scope.player.setVolume(!$rootScope.muted);

            $scope.player.on('ended', function(){
                console.log('ended');
                $state.go('home');
                $scope.showFooterMenu();
            })

            clearInterval($scope.interval);

        },10);

        $scope.$on("$destroy", function() {
            console.log("destroy called on scope");
            $scope.player.src = "";
        });

}]);
