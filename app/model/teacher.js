'use strict';

module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Teacher = app.model.define('Teacher', {
      id: {
          type: INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: STRING(20),
          allowNull: false
      }
  }, {
      freezeTableName: true,
      tableName: 'teacher'
  });
  Teacher.associate = function() {

  }
  return Teacher;
}
