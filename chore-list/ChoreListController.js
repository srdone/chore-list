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
    vm.addChore = addChore;
    vm.newChore = '';

    function addChore () {
      choreService.addChore(vm.newChore);
      vm.newChore = '';
    }

    activate();

    ////////////////

    function activate() {
    }


  }

}());