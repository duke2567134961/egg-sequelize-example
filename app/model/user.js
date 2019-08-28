'use strict';

module.exports = app => {
    const { INTEGER, STRING, TEXT } = app.Sequelize;
    const User = app.model.define('User', {
        id: {
            type: INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: STRING(20),
            allowNull: false
        }
    }, {
        freezeTableName: true,
        tableName: 'user'
    });
    User.associate = function() {
        app.model.User.hasOne(app.model.Info);
        app.model.User.hasMany(app.model.Family, { foreignKey: 'userId', targetKey: 'id' });
    }
    return User;
}
