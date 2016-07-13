(function() {
  'use strict';

  angular
    .module('anatapp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
