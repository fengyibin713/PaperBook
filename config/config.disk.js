
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var templatePath = path.normalize(__dirname + '/../app/mailer/templates');

module.exports = {
  development: {
    db: 'mongodb://localhost/xlms_dev',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'X Literature Management System'
    }
  },
  test: {
    db: 'mongodb://localhost/xlms_test',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'X Literature Management System'
    }
  },
  production: {
    db: 'mongodb://localhost/xlms_prod',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'X Literature Management System'
    }
  }
}
