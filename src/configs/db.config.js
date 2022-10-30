module.exports = {
    HOST: process.env.DATABASE_HOST,
    PORT: process.env.DATABASE_PORT,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_DB,
    DIALECT: process.env.DATABASE_DIALECT,
    POOL: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
};
