angular
    .module('jrhApp')
    .controller('videoController', ['$scope', '$rootScope', '$stateParams', '$state',  function($scope, $rootScope, $stateParams, $state) {
        $scope.videoPlaying = false;

        // receive control events while video is loaded

        $scope.onMute = function(event,data){
            console.log('received muteEvent: '+data);
            $scope.player.volume = !data;
        }

        $rootScope.$on('mute', $scope.onMute);

       /* $rootScope.$on('mute', function(event, data) {
            console.log('received muteEvent: '+data);
            $scope.player.setVolume(!data);
        }); */

        window.$vscope = $scope;
        console.log('HERE', $scope.player);

        $scope.playVideo = function(){

                console.log("video canplay");
               // $scope.player.currentTime = 10;
                $scope.player.play();
                $scope.player.removeEventListener("canplay", $scope.playVideo);
        
        }

        
        $scope.init = function(){

        $scope.player = document.getElementById("jimmy-video");           

           $scope.player.addEventListener("canplay", $scope.playVideo);

          //  $scope.player.currentTime = 10;

            console.log("$rootScope.muted: "+$rootScope.muted);

            // when video is loaded, set volume property to muted global variable
            $scope.player.volume = !$rootScope.muted;

            $scope.player.addEventListener('ended', function(){
                console.log('ended');
                $state.go('home');
                $scope.showFooterMenu();
            })
        }

       setTimeout($scope.init, 10);

        $scope.$on("$destroy", function() {
            console.log("destroy called on scope");
            $scope.player.src = "";



        });



}]);
