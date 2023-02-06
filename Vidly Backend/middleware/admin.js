function checkAdmin(req, res, next) {
  if (!req.user.isAdmin) return res.status(403).send("Forbidden");
  next();
}

module.exports = checkAdmin;
