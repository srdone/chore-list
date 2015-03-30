(function () {

  angular
    .module('choreTracker')
    .factory('choreService', choreService);

  /* @ngInject */
  function choreService() {

    var chores = ['testChore'];

    var service = {
      chores: chores
    };

    return service;
  }


}());