'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserById({ id }) {
    const { ctx } = this;
    let userInfo = {};
    try {
        userInfo = await ctx.model.User.findAll({
            where: {
              id,
            },
            // 查询操作的时候，加入这个参数可以直接拿到对象类型的查询结果，否则还需要通过方法调用解析
            raw: true,
        });
    } catch (err) {
        ctx.logger.error(err);
    }

    return userInfo;
  }

  async setUser({ name }) {
    const { ctx } = this;
    let transaction;

    try {
        // 这里需要注意，egg-sequelize会将sequelize实例作为app.model对象
        transaction = await ctx.model.transaction();

        // 创建用户
        const user = await ctx.model.User.create({
            name,
        }, {
            transaction,
        });

        // 创建默认组
        const group = await ctx.model.Group.find({
            name: 'default',
        }, {
            transaction,
        });

        const userId = user && user.getDataValue('id');
        const groupId = group && group.getDataValue('id');

        if (!userId || !groupId) {
            throw new Error('创建用户失败');
        }

        // 创建用户和组之间的关联
        const associate = await ctx.model.GroupUser.create({
            user_id: userId,
            group_id: groupId,
        }, {
            transaction,
        });

        await transaction.commit();

        return userId;
    } catch (err) {
        ctx.logger.error(err);
        await transaction.rollback();
    }
  }

  async getGroupByUserId({ id }) {
    const { ctx } = this;
    const group = await ctx.model.User.findAll({
        attributes: ['project.id', 'project.name'],
        include: [
            {
                model: ctx.model.Group,
                as: 'project',
                // 指定关联表查询属性，这里表示不需要任何关联表的属性
                attributes: [],
                through: {
                    // 指定中间表的属性，这里表示不需要任何中间表的属性
                    attributes: []
                }
            }
        ],
        where: {
            id,
        },
        raw: true,
        // 这个需要和上面的中间表属性配合，表示不忽略include属性中的attributes参数
        includeIgnoreAttributes: false,
    });
    return group;
  }
}

module.exports = UserService;
