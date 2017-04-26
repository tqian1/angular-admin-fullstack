'use strict';

angular.module('blurAdminFullstackApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'ui.sortable',
  'ngTouch',
  'toastr',
  'xeditable',
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'validation.match',
  'smart-table',
  'angular-loading-bar',
  'angularSpinner',
  'ui.toggle',

  'blurAdminFullstackApp.auth',
  'blurAdminFullstackApp.constants',
  'blurAdminFullstackApp.resources',
  'blurAdminFullstackApp.theme',
  'blurAdminFullstackApp.pages'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    // $httpProvider.defaults.useXDomain = true;
    // $httpProvider.defaults.withCredentials = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    // $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
