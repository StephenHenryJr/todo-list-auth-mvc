module.exports = {
    ensureAuth: function (req, res, next) {
      // If you're logged in, move on
      if (req.isAuthenticated()) {
        return next()
      // If not redirect to the main page where you can login again
      } else {
        res.redirect('/')
      }
    }
  }
  