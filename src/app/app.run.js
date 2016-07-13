(function() {
  'use strict';

  angular
    .module('anatapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
