'use strict';

module.exports = app => {
  const { TEXT, INTEGER, NOW, DATE } = app.Sequelize;

  const Group = app.model.define(
      'group',
      {
          name: TEXT,
          createAt: {
              type: DATE,
              field: 'db_create_time',
              allowNull: false,
              defaultValue: NOW,
          },
          updateAt: {
              type: DATE,
              field: 'db_update_time',
              allowNull: false,
              defaultValue: NOW,
          },
      },
      {
          timestamps: false,
          freezeTableName: true,
          tableName: 'groups',
          underscored: true,
      }
  );

  // 定义关联关系
  Group.prototype.associate = function() {
    //   app.model.Group.belongsToMany(app.model.User, {
    //       through: app.model.groupUser,
    //       as: 'partner',
    //       constraints: false,
    //   });
  };

  Group.sync();
  return Group;
};
