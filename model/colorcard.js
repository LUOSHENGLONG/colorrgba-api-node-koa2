// gradient.js
 
const Sequelize = require('sequelize');
const sequelize = require('../config/db');

// 创建 model
const ColorCard = sequelize.define('colorcard', {
    id: {
        type: Sequelize.STRING, // 指定值的类型
        // field: 'id' // 指定存储在表中的键名称
        primaryKey: true
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
// const colorCard = ColorCard.sync({ force: false });
 
// 查找所有条数
exports.getTotalCount = function() {
    return ColorCard.findAll({
        attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'id']]
    })
}

 
// 通过id查找
exports.findById = function(id) {
    return ColorCard.findOne({ where: { id: id } });
};

// 通过id查找 offset分页起始 limit查询多少行 orderColumn排序 数组 ['字段','desc/asc']
exports.findAll = function(offset,limit,orderColumn) {
    return ColorCard.findAll({ offset: offset, limit: limit, order: [orderColumn]});
};
