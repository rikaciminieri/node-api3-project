const Users = require("../users/users-model");

function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`);

  next();
}

function validateUserId(req, res, next) {
  Users.getById(req.params.id)
    .then(user => {
      if(user) {
        next()
      } else {
        next({message: `User with id ${req.params.id} not found!`})
      }
    })
}

function validateUser(req, res, next) {
  // DO YOUR MAGIC
}

function validatePost(req, res, next) {
  // DO YOUR MAGIC
}

// do not forget to expose these functions to other modules
module.exports = logger, validateUserId, validateUser, validatePost 
