'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  })
  .state('profile', {
    url: '/profile',
    templateUrl: 'app/profile/profile.html',
    controller: 'ProfileCtrl',

    // SpStateConfig object:

    sp: {
      authenticate: true
    }
});
