/*!
 * Module dependencies.
 */

var async = require('async')

/**
 * Controllers
 */

var users = require('../app/controllers/users');
var search = require('../app/controllers/search');
var auth = require('./middlewares/authorization');
var literature = require('../app/controllers/literature');


/**
 * Expose routes
 */

module.exports = function (app, passport) {

  // User routes
  app.get('/signin', users.showSignIn);
  app.get('/signup', users.showSignUp);
  app.get('/signout', users.signout);
  app.post('/users', users.create);
  app.post('/users/session',
    passport.authenticate('local', {
      failureRedirect: '/signin',
      failureFlash: 'Invalid email or password.'
    }), users.session);

  app.get('/users/:userId', users.showProfile);

  app.param('userId', users.user);


  // home route
  app.get('/', search.index);

  // search route
  app.get('/search/results', search.showSearchResults);
  app.get('/literature/1', literature.fetchById);

  // Literature Route
  app.post('/literature', literature.create);


}
