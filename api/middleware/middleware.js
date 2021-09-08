const Users = require("../users/users-model");

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);
  next();
}

function validateUserId(req, res, next) {
  Users.getById(req.params.id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        next({ status: 404, message: `user not found` });
      }
    })
    .catch(next);
}

function validateUser(req, res, next) {
  if (!req.body.name) {
    next({ status: 400, message: "missing required name field" });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  if (!req.body.text) {
    next({ status: 400, message: "missing required text field" });
  } else {
    next();
  }
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePost };
