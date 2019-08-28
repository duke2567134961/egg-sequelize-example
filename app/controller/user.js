'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async getUserListInclueInfo() {
        let result = await this.app.model.User.findAll({
            include: [
                {
                    model: this.app.model.Info
                }
            ]
        });
        let result2 = await this.app.model.User.findAll({
            include: [
                {
                    model: this.app.model.Info,
                    where: {
                        age: {
                            [this.app.Sequelize.Op.gt]: 15
                        }
                    }
                }
            ]
        });
        let result3 = await this.app.model.User.findAll({
            include: [
                {
                    model: this.app.model.Info,
                    where: {
                        age: {
                            [this.app.Sequelize.Op.gt]: 15
                        }
                    },
                    required: false
                }
            ]
        });    
        this.ctx.body = {
            'no_where': result,
            'has_where': result2,
            'where_has_required_false': result3
        };
    }

    async hasMany() {
        let result = await this.app.model.User.findAll({
          include: {
            model: this.app.model.Family,
          }
        });
        this.ctx.body = result;
    }  
    async belongsTo() {
        let result = await this.app.model.Family.findAll({
          include: {
            model: this.app.model.User
          }
        });
        this.ctx.body = result;
    }

    async belongsToMany() {
        let result = await this.app.model.Lesson.findAll({
          include: {
            model: this.app.model.Teacher
          }
        });
        this.ctx.body = result;
    }


  async set() {
    const ctx = this.ctx;
    const params = ctx.request.query;
    const userInfo = await this.ctx.service.user.setUser(params);
    console.log(userInfo)
    if (userInfo) {
        ctx.body = {
            code: 200,
            message: 'success',
            data: userInfo
        }
    } else {
        ctx.body = {
            code: 500,
            message: 'error',
        }
    }
  }
  
  async groupUserId() {
    const ctx = this.ctx;
    const userInfo = await this.ctx.service.user.getGroupByUserId({ id: 1 });
    if (userInfo) {
        ctx.body = {
            code: 200,
            message: 'success',
            data: userInfo
        }
    } else {
        ctx.body = {
            code: 500,
            message: 'error',
        }
    }
  }
}

module.exports = UserController;
