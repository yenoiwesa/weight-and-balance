'use strict';

angular.module('yenoWeightAndBalanceApp.auth', [
  'yenoWeightAndBalanceApp.constants',
  'yenoWeightAndBalanceApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
