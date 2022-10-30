module.exports = (sequelize, Sequelize) => {
    const Blog = sequelize.define("blog", {
        id: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING
        },
        created_date: {
          type: Sequelize.STRING
        }
    });

    return Blog;
};
