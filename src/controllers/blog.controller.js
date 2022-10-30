const db = require("../models");
const Blog = db.blog;
const Op = db.Sequelize.Op;

// List all blogs
exports.findAllBlogs = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Blog.findAll({where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
                message: err.message || "Some error occured while retrieving blogs."
        });
    });
}

exports.create = async (req, res) => {
    const data = [
        {
          "id": "blog1",
          "title": "Test blog: One",
          "description": "This is the test content. This is the github repository MD file test content. Go through the link for the more details. Thank you!",
          "created_date": "2020-01-01"
        },
        {
          "id": "blog2",
          "title": "Test blog: two",
          "description": "This is the test content. This is the github repository MD file test content. Go through the link for the more details. Thank you!",
          "created_date": "2020-01-01"
        },
        {
          "id": "blog3",
          "title": "Test blog: Three",
          "description": "This is the test content. This is the github repository MD file test content. Go through the link for the more details. Thank you!",
          "created_date": "2020-01-01"
        }
    ];
    try {
        for(let i=0; i<data.length; i++) {
            await Blog.create(data[i])
            .then(data => {
                console.log('Success', data);
                return data;
            })
            .catch((err) => {
                console.error('Failed to create a new record : ', err);
                throw err;
            });
        }

        res.status(200).send({
            message: "Blogs created successfully"
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occured whiel creating the data."
        });
    }
};
