(function () {

  angular
    .module('choreTracker')
    .directive('ctChoreList', ctChoreList);

  /* @ngInject */
  function ctChoreList() {

    return {
      restrict: 'E',
      scope: {},
      bindToController: true,
      controller: 'ChoreListController',
      controllerAs: 'vm',
      templateUrl: 'chore-list/choreListTemplate.html'
    }


  }

}());