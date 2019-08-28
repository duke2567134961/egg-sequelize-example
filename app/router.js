'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', app.controller.user.getUserListInclueInfo);
  router.get('/user/hasmany', app.controller.user.hasMany);
  router.get('/user/belongsto', app.controller.user.belongsTo);
  router.get('/user/belongsToMany', app.controller.user.belongsToMany);
};
