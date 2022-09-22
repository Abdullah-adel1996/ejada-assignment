const jwt = require("jsonwebtoken");
const HttpError = require("../models/htttp-error");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    const error = new HttpError(
      "you are not authorized to perform this action!",
      401
    );
    next(error);
  }

  jwt.verify(token, "supersecret_dont_share", (err, user) => {
    if (err) {
      const error = new HttpError("invalid token!", 401);
      next(error);
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
