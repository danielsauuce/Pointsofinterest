const userMiddleware = (req, res, next) => {
  if (["POST", "PUT", "DELETE"].indexOf(req.method) == -1) {
    next();
  } else {
    if (req.session.username) {
      next();
    } else {
      res.status(401).json({ error: "You're not logged in. Go away!" });
    }
  }
};

export default userMiddleware;
