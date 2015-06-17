'use strict';

/**
 * @ngdoc directive
 * @name testApp.directive:mySuperList
 * @description
 * # mySuperList
 */
angular.module('testApp')
  .directive('mySuperList', function () {
    var directive = {
      restrict: 'AE',
      compile: compile,
      scope: true
    };
    return directive;

    function compile(tElement, tAttrs, tTransclude) {
      // Extract the children from this instance of the directive
      var children = tElement.children();
      var items = tAttrs.items;
      var item = tAttrs.item ? tAttrs.item : 'item';
      var selectModel = tAttrs.selectModel;
      var selectOn = tAttrs.selectOn;
      var draggable = tAttrs.dnd && tAttrs.dnd === 'true';

      var containerElement = angular.element('<div class="super-list-container"></div>');

      var itemTemplate = '<div class="super-list-item" ng-class="{selected: ' + item + '.selected}" ng-repeat="' + item + ' in ' + items + '"></div>';
      var itemElement = angular.element(itemTemplate);

      var itemWrapper = angular.element('<div class="super-list-item-wrapper"></div>');
      itemWrapper.append(children);

      var leftMargin = 0;

      if (draggable) {
        var draggableTemplate = '<div class="super-list-draggable"></div>';
        var draggableElement = angular.element(draggableTemplate);
        itemElement.append(draggableElement);

        containerElement.attr('dnd-list', items);
        itemElement.attr('dnd-draggable', item);
        itemElement.attr('dnd-moved', items + '.splice($index, 1)');
        itemElement.attr('dnd-effect-allowed', 'move');

        leftMargin += 30;
      }

      if (selectModel) {
        var selectionTemplate = '<div class="super-list-select">' +
          '<input type="checkbox" ng-model="' + item + '.selected" ng-change="' + selectOn + '(' + item + ')" />' +
          '</div>';
        var selectionElement = angular.element(selectionTemplate);
        itemElement.append(selectionElement);
        selectionElement.attr('style', 'left: ' + (15 + leftMargin) + 'px;');

        itemWrapper.attr('ng-click', item + '.selected=!' + item + '.selected; ' + selectOn + '(' + item + ')');

        leftMargin += 20;
      }

      itemWrapper.attr('style', 'margin-left: ' + leftMargin + 'px;');

      itemElement.append(itemWrapper);

      containerElement.append(itemElement);

      // Append this new template to our compile element
      tElement.html('');
      tElement.append(containerElement);

      return {
        pre: preLink,
        post: postLink
      };
    }

    function preLink(scope, iElement, iAttrs, crtl, transclude) {
    }

    function postLink(scope, iElement, iAttrs, controller) {
      console.log(iElement[0]);
    }

  });
