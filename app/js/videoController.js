angular
    .module('jrhApp')
    .controller('videoController', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {
        $scope.videoPlaying = false;

        $scope.playVideo = function(videoName){
            $scope.videoPlaying = true;
            $scope.activeVideoName = videoName;
            console.log("play video!");
            console.log("videoPlaying is:"+ $scope.videoPlaying);

            var myVideo = document.getElementById("videoPlayer"); 
            myVideo.play();

            myVideo.addEventListener('ended',$scope.onVideoDone,false);

            //$scope.hideFooterMenu();

        }

        $scope.onVideoDone = function(e){
            console.log("video finished playing");
            $scope.videoPlaying = false;
            $scope.$apply();
        }

}]);