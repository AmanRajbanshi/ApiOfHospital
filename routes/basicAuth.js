const { users } = require("./userRole");

function setUser(req, res, next) {
  const userId= req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

function authUser(req, res, next) {
    if (req.user == null) {
      res.status(403);
      return res.send("you need to sign in");
    }
    next();
  }
  
  function authRole(role) {
    return (req, res, next) => {
      if (req.user.role !== role) {
        res.status(401);
        return res.send('Not allowed');
      }
      next();
    };
  }
  
  module.exports = {
    authUser,
    authRole,
    setUser
  };
  