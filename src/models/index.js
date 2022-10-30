const dbConfig = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        operationsAliases: false,

        pool: dbConfig.POOL
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.blog = require("./blog.model.js")(sequelize, Sequelize);

module.exports = db;
