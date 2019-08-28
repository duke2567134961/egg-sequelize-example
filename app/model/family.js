'use strict';

module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Family = app.model.define('Family', {
      id: {
          type: INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      userId: {
          type: INTEGER.UNSIGNED,
          allowNull: false
      },
      name: {
          type: STRING(50),
          allowNull: false
      },
      gender: {
          type: INTEGER.UNSIGNED,
          defaultValue: 0
      },
      relationship: {
          type: STRING(20)
      }
  }, {
      freezeTableName: true,
      tableName: 'family'
  });
  Family.associate = function() {
      app.model.Family.belongsTo(app.model.User, { foreignKey: 'userId', targetKey: 'id' });
  }
  return Family;
}