const Sequelize = require('sequelize')
const conf = {
    host:'localhost',
    dialect:'mysql'
}
const seq = new Sequelize('blog','root','yhj19921225',conf)
module.exports=seq