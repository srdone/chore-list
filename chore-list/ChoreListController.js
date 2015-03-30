(function () {

  angular
    .module('choreTracker')
    .controller('ChoreListController', ChoreListController);

  ChoreListController.$inject = ['choreService'];

  /* @ngInject */
  function ChoreListController(choreService) {
    /* jshint validthis: true */
    var vm = this;

    vm.activate = activate;
    vm.title = 'ChoreListController';
    vm.choreList = choreService.chores;

    activate();

    ////////////////

    function activate() {
    }


  }

}());