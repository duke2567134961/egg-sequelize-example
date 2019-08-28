'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const GroupUser = app.model.define(
      'group_user',
      {
          user_id: INTEGER,
          group_id: INTEGER,
      },
      {
          timestamps: false,
          freezeTableName: true,
          tableName: 'group_user',
          underscored: true,
      }
  );
  
  GroupUser.sync();

  return GroupUser;
};
