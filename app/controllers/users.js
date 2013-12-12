
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var User = mongoose.model('User');
var utils = require('../../lib/utils');

/**
 * Show Sign In Page
 */
exports.showSignIn = function (req, res) {
  res.render('users/signin', {
    title: 'Sign In',
    message: req.flash('error')
  });
}

/**
 * Show Sign Up Page
 */
exports.showSignUp = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  });
}

/**
 * Logout, and redirect to signin page
 */
exports.signout = function (req, res) {
  req.logout()
  res.redirect('/signin')
}

/**
 * When there is returnTo in session, redirect to originalURL
 */
exports.session = function (req, res) {
  if (req.session.returnTo) {
    res.redirect(req.session.returnTo)
    delete req.session.returnTo
    return
  }
  res.redirect('/')
}

/**
 * Create user
 */

exports.create = function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err) {
      return res.render('users/signup', {
        errors: utils.errors(err),
        user: user,
        title: 'Sign up'
      });
    }

    // manually login the user once successfully signed up
    req.logIn(user, function(err) {
      if (err) return next(err)
      return res.redirect('/')
    });
  });
}

/**
 *  Show profile
 */
exports.showProfile = function (req, res) {
  var user = req.profile
  res.send(user);
  // res.render('users/profile', {
  //   title: user.name,
  //   user: user
  // });
}

exports.list = function (req, res) {
  User.find({})
    .sort({'signUpAt': -1, 'username': 1, 'fullname': 1})
    .exec(function (err, list) {
      if (err) throw err;
      res.send(list);
      // res.render('admin/userlist', {
      //   title: 'User List',
      //   list: list
      // });
    });
}

/**
 * Find user by id
 */
exports.user = function (req, res, next, id) {
  User
    .findOne({ _id : id })
    .exec(function (err, user) {
      if (err) return next(err)
      if (!user) return next(new Error('Failed to load User ' + id))
      req.profile = user
      next()
    });
}
