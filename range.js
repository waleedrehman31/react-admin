module.exports = (req, res, next) => {
  res.header("content-range", "Posts 0-20/0");
  res.header("content-range", "Users 0-20/0");
  next();
};
