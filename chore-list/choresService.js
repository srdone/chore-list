(function () {

  angular
    .module('choreTracker')
    .factory('choreService', choreService);

  /* @ngInject */
  function choreService() {

    var chores = [];

    var addChore = function (newChore) {
      chores.push(newChore);
    };

    var service = {
      chores: chores,
      addChore: addChore
    };

    return service;
  }


}());