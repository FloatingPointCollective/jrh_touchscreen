angular
    .module('jrhApp')
    .controller('issuesController', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {

    $scope.showMouse = true;
    $scope.showHomeScreen = false;
    // $scope.showIssues= true;
    // $scope.activeAboutPage = null;
    // $scope.debug = false;
    $scope.issueId = $stateParams.issue;

    console.log($stateParams);

    // $scope.getIssue = function(id) {
    //     return $scope.issuePages.filter(function(issue) {
    //         return issue.id == id;
    //     })[0];
    // }

    // $scope.issue = $scope.getIssue($stateParams.issueId);

    function setCurrentIssue(issue) {
        //$scope.currentIssue = issue;
//        $state.go('quote', {issue: issue.title});
    }

    $scope.issuePages = [
        {   
            id: 1,
            title:'Labor Rights', 
            quote:'Quote about Labor Rights.', 
            description:'Text about Labor Rights', 
            imageID:'laborRights', 
            caption:'Caption about Labor Rights'
        },
        {   
            id: 2,
            title:'Rehabilitation', 
            quote:'Quote about Rehabilitation.', 
            description:'Text about Rehabilitation', 
            imageID:'rehabilitation', 
            caption:'Caption about Rehabilitation'
        },
        {
            id: 3,
            title:'Economic Justice', 
            quote:'Quote about Economic Justice.', 
            description:'Text about Economic Justice', 
            imageID:'econjustice', 
            caption:'Caption about Economic Justice'
        },
        {   
            id: 4,
            title:'Civil Rights', 
            quote:'Quote about Civil Rights.', 
            description:'Text about Civil Rights', 
            imageID:'civilrights', 
            caption:'Caption about Civil Rights'
        },
        {
            id: 5,
            title:'Affordable Housing', 
            quote:'Quote about Affordable Housing.', 
            description:'Text about Affordable Housing', 
            imageID:'affordablehousing', 
            caption:'Caption about Affordable Housing'
        },
        {
            id: 6,
            title:'International Solidarity', 
            quote:'Quote about International Solidarity.', 
            description:'Text about International Solidarity', 
            imageID:'intlsolidarity', 
            caption:'Caption about International Solidarity'
        }
    ];

    


}]);