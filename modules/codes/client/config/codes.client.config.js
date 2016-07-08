(function () {
  'use strict';

  angular
    .module('codes')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'View all snippets',
      state: 'codes.list',
      roles: ['*']
    });

    Menus.addMenuItem('topbar', {
      title: 'Create new snippet',
      state: 'codes.create',
      roles: ['user']
    });
  }
})();
