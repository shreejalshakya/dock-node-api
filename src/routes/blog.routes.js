module.exports = app => {
    const blogController = require("../controllers/blog.controller.js");

    var router = require("express").Router();

    // create all Blogs
    router.get("/create", blogController.create);
    // List all Blogs
    router.get("/", blogController.findAllBlogs);

    app.use(`/api/blogs`, router);
};
