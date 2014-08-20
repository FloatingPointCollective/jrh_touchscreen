
function uiCtrl($scope) {

  $scope.hideMouse = false;

    $scope.onKeyUp = function ($event) {
        if($event.keyCode == 32){
          $scope.hideMouse = ! $scope.hideMouse;
        }
        console.log("keypressed: " + $event.keyCode);
        console.log("$scope.hideMouse: "+$scope.hideMouse);
    };

}