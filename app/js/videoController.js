angular
    .module('jrhApp')
    .controller('videoController', ['$scope', '$stateParams', '$state',  function($scope, $stateParams, $state) {
        $scope.videoPlaying = false;

        $scope.videoPlaylist = [
            {src: 'video/jimmy_story.mp4', type: 'video/mp4'}
        ];

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