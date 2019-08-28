'use strict';

module.exports = app => {
  const { INTEGER, STRING, TEXT } = app.Sequelize;
  const TeacherLessonRelation = app.model.define('TeacherLessonRelation', {
      id: {
          type: INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
      },
      lessonId: {
          type: INTEGER.UNSIGNED,
          allowNull: false
      },
      teacherId: {
          type: INTEGER.UNSIGNED,
          allowNull: false
      }
  }, {
      freezeTableName: true,
      tableName: 'teacher_lesson_relation'
  });
  TeacherLessonRelation.associate = function() {

  }
  return TeacherLessonRelation;
}
