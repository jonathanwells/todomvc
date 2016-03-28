var MODULES, angular;

angular = require('angular');

if (typeof global === 'undefined') {
  window.global = window;
}

require('./modules/sample_module');

MODULES = ['sample'];

angular.module('app', MODULES).config(function($locationProvider) {
  return $locationProvider.html5Mode(true);
});

console.log("client is ready");
