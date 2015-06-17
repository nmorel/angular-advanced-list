'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainCtrl', function () {

    var vm = this;
    vm.frameworks = [
      {
        title: 'HTML5 Boilerplate',
        description: 'HTML5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.',
        url: 'https://html5boilerplate.com/'
      },
      {
        title: 'AngularJS',
        description: 'HTML enhanced for web apps!',
        url: 'https://angularjs.org/'
      },
      {
        title: 'Karma',
        description: 'The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don\'t have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests. Because getting quick feedback is what makes you productive and creative.',
        url: 'http://karma-runner.github.io/0.12/index.html'
      }
    ];
    vm.onSelectionChange = function () {
      vm.selected = _.filter(vm.frameworks, function (framework) {
        return framework.selected;
      });

    }
  });
