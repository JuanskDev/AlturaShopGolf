function admin(req, res, next) {
  if (req.session.user.categoria === "admin") {
    next();
  } else {
    return res.redirect("/");
  }
}
module.exports = admin;
