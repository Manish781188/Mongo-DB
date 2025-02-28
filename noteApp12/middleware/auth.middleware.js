const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "coding", (err, decoded) => {
    //   console.log(decoded); 
    req.body.user = decoded.userID;
      next();
    });
  } else {
    res.send({ msg: "Please login first" });
  }
};

module.exports = {auth}