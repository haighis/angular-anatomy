angular
    .module('SupportRequest.UI')
    .controller('SupportRequestController', SupportRequestController);

  /** @ngInject */
  function SupportRequestController($log) {
    var vm = this;
    
    activate();

    function activate() {
      $log.log('i am in SupportRequestController');
    }

    // Define additional Controller's related to Support Request's in additional files
  }