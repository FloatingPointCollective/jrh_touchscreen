angular
    .module('jrhApp')
    .controller('aboutILWUController', ['$scope', '$stateParams', '$state', 'WebSocket', function($scope, $stateParams, $state) {

   // $scope.showMouse = true;
    $scope.showHomeScreen = false;
    $scope.ilwuId = $stateParams.ilwu;
    $scope.setCurrentIlwu = setCurrentIlwu;
    $scope.clearCurrentIlwu = clearCurrentIlwu;

    console.log($stateParams);

    function setCurrentIlwu(ilwu) {
        console.log(ilwu.id);
        //WebSocket.send(issue.id); //send issue to LED Control machine
    }

    function clearCurrentIlwu() {
        console.log("clearing issue");
        //WebSocket.send(0);
    }

    $scope.ilwuPages = [
        {   
            id: 1,
            title:'Union Democracy', 
            description:'partial', 
            imageID:'uniondemocracy', 
            caption:'ILWU Longshore workers voting in a union meeting (ILWU Archives)'
        },
        {   
            id: 2,
            title:'Who the ILWU Represents', 
            description:'partial', 
            imageID:'representation', 
            caption:'A longshore worker on the docks in Southern California (ILWU Archives)',
        },
        {
            id: 3,
            title:'Ten Guiding Principles', 
            description:'partial', 
            imageID:'principles', 
            caption:'',
            width:'700'
        }
    ];

}]);