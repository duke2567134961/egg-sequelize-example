'use strict';

module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const Lesson = app.model.define('Lesson', {
      id: {
          type: INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      name: {
          type: STRING(20)
      }
  }, {
      freezeTableName: true,
      tableName: 'lesson'
  });
  Lesson.associate = function() {
      app.model.Lesson.belongsToMany( app.model.Teacher,{ through: app.model.TeacherLessonRelation, foreignKey: 'lessonId', otherKey: 'teacherId'});
  }
  return Lesson;
}
