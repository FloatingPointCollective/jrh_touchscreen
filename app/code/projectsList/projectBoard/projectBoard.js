angular.module("projectBoard", ["bugDetail"])

    .config(function ($stateProvider) {

      $stateProvider.state('projects.board', {
        url: '/:projectId',
        templateUrl: "projectsList/projectBoard/projectBoard.tpl.html",
        controller: function($scope, projectData, $stateParams){
          $scope.bugs = projectData.getBugs($stateParams.projectId);
        }
      });

    });