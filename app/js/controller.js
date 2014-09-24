
function uiCtrl($scope) {

  $scope.showMouse = false;
  $scope.videoPlaying = false;
  $scope.activeVideoName = "";
  $scope.footerMenuIsHidden = false;
  $scope.showHomeScreen = true;
  $scope.activeAboutPage = null;

  $scope.aboutPages = [
    {label:'About the ILWU', text:'Text about the ILWU'},
    {label:'SF Port Commission', text:'Text about the Port'},
    {label:'Credits', text:'Credits text lorem ipsum.'},
    ];

    $scope.onKeyUp = function ($event) {
        if($event.keyCode == 32){
          $scope.showMouse = ! $scope.showMouse;
        }
        //console.log("keypressed: " + $event.keyCode);
        //console.log("$scope.hideMouse: "+$scope.hideMouse);
    };

    $scope.playVideo = function(videoName){
      $scope.videoPlaying = true;
      $scope.activeVideoName = videoName;
      console.log("play video!");

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

}