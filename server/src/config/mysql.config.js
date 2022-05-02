const sequelize = require('sequelize');

const db = new sequelize.Sequelize("server_data", "root", "root", {
    host: 'localhost',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        
    }
});

db.authenticate().then(val => console.log('Connected successfully')).catch(err => console.log(err))

module.exports = db;