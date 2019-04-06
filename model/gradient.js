// gradient.js
 
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

// 创建 model
const Gradient = sequelize.define('gradient', {
    id: {
        type: Sequelize.STRING, // 指定值的类型
        // field: 'id' // 指定存储在表中的键名称
        primaryKey: true
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 rotate
    rotate: {
        type: Sequelize.INTEGER
    },
    colorList: {
        type: Sequelize.STRING
    },
    num: {
        type: Sequelize.INTEGER
    },
    createTime: {
        type: Sequelize.STRING
    },
    click: {
        type: Sequelize.INTEGER
    }
}, {
    // 如果为 true 则表的名称和 model 相同，即 user
    // 为 false MySQL创建的表名称会是复数 users
    // 如果指定的表名称本就是复数形式则不变
    freezeTableName: true
});
 
// 创建表
// User.sync() 会创建表并且返回一个Promise对象
// 如果 force = true 则会把存在的表（如果users表已存在）先销毁再创建表
// 默认情况下 forse = false
const gradient = Gradient.sync({ force: false });
 
// 添加新用户
exports.addGradient = function(id, rotate, colorList, num, createTime, click) {
    // 向 user 表中插入数据
    return Gradient.create({
        id: id,
        rotate: rotate,
        colorList: colorList,
        num: num,
        createTime: createTime,
        click: click
    });
};
 
// 通过id查找
exports.findById = function(id) {
    return Gradient.findOne({ where: { id: id } });
}; 

// 查找所有条数
exports.getTotalCount = function() {
    return Gradient.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'id']]
    })
}

// 
exports.findAll = function(offset,limit,orderColumn) {
    return Gradient.findAll({ offset: offset, limit: limit, order: [orderColumn]});
};
