'use strict';

/**
 * @ngdoc overview
 * @name meiTuanApp
 * @description
 * # meiTuanApp
 *
 * Main module of the application.
 */
angular
  .module('meiTuanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
