const Sequelize = require('sequelize')
const seq = new Sequelize('koa2_weibo','root','yhj19921225',{ 
    host:'localhost',
    dialect:'mysql'
})

module.exports  =seq  
