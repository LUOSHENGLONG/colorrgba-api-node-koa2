const Sequelize = require('sequelize')
const config = {
    database: 'colorrgba',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306
}
const DATABASE = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql', // 数据库方言
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    },
    define: {
        timestamps: false
    }
})

module.exports = DATABASE
