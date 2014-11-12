angular
    .module('jrhApp')
    .controller('uiCtrl', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {
        $scope.showMouse = true;
        $scope.videoPlaying = false;
        $scope.activeVideoName = "";
        $scope.footerMenuIsHidden = false;
        $scope.showHomeScreen = true;
        $scope.activeAboutPage = null;
        $scope.debug = false;
        $scope.aboutId = $stateParams.aboutId;

        console.log($stateParams);

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
                //$state.go('video');
                $scope.playVideo();
            } else if(index === 1) {
                $state.go('issues');
                $scope.hideFooterMenu();
            }
        }

        $scope.playVideo = function(videoName){
            $scope.videoPlaying = true;
            $scope.activeVideoName = videoName;
            console.log("play video!");
            console.log("videoPlaying is:"+ $scope.videoPlaying);

            var myVideo = document.getElementById("videoPlayer"); 
            myVideo.play();

            myVideo.addEventListener('ended',$scope.onVideoDone,false);

            $scope.hideFooterMenu();

        }

        $scope.onVideoDone = function(e){
            console.log("video finished playing");
            $scope.videoPlaying = false;
            $scope.$apply();
        }

        $scope.selectFooterMenu = function(index){
            $scope.hideFooterMenu();
            $scope.showHomeScreen = false;
            $scope.activeAboutPage = index;
        }

        $scope.hideFooterMenu = function(){
            $scope.footerMenuIsHidden = true;
        }

        $scope.showFooterMenu = function(){
            $scope.footerMenuIsHidden = false;
        }

        $scope.goHome = function(){
            $scope.showFooterMenu();
            $scope.showHomeScreen = true;
            $scope.activeAboutPage = null;

            //stop video
            var myVideo = document.getElementById("videoPlayer"); 
            myVideo.pause();
            myVideo.currentTime = 0;
            $scope.videoPlaying = false;
            $scope.$apply();
        }

        $scope.loadAboutPage = function(pageID){
            $scope.activeAboutPage = pageID;
        }
}]);