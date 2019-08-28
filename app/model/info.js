'use strict';

module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Info = app.model.define('Info', {
      id: {
          type: INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      age: {
          type: INTEGER.UNSIGNED
      },
      address: {
          type: STRING(50)
      }
  }, {
      freezeTableName: true,
      tableName: 'user_info'
  });
  Info.associate = function() {
      app.model.Info.belongsTo(app.model.User, { foreignKey: 'userId', targetKey: 'id' });
  }
  return Info;
}
