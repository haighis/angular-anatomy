(function() {
  'use strict';

  angular
    .module('SupportRequest.UI')
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('supportrequest', {
        url: '/supportrequest',
        templateUrl: 'app/supportrequest/list.html',
        controller: 'SupportRequestController',
        controllerAs: 'main'
      });
  }
})();
