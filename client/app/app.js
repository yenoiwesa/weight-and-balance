'use strict';

angular.module('yenoWeightAndBalanceApp', [
  'yenoWeightAndBalanceApp.auth',
  'yenoWeightAndBalanceApp.admin',
  'yenoWeightAndBalanceApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
