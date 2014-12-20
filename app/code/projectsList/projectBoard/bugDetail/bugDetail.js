angular.module("bugDetail", [])

    .config(function ($stateProvider) {

      $stateProvider.state('projects.board.bugDetail', {
        url: '/bug/:bugId',
        templateUrl: "projectsList/projectBoard/bugDetail/bugDetail.tpl.html",
        controller: function($scope, projectData, $stateParams){
          $scope.bug = projectData.getBug($stateParams.projectId, $stateParams.bugId);
        }
      });

    });