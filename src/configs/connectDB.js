const { Sequelize } = require('sequelize');




const sequelize = new Sequelize('test_cnt','root',null,{
    host:'localhost',
    dialect: 'mysql'
});