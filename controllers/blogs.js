const blogsRouter = require("express").Router();
const Blog = require("../models/blogSchema");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogsRouter.post("/", (request, response, next) => {
  const body = request.body;

  const newBlog = new Blog({
    author: body.author,
    title: body.title,
    URL: body.URL,
    upvotes: body.upvotes,
  });

  newBlog.save()
    .then(result => {
      response.json(result);
    })
    .catch(error => next(error))
});

module.exports = blogsRouter;
