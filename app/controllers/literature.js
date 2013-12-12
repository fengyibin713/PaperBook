/**
 * Module Dependencies
 */
var mongoose = require('mongoose');
var Literature = mongoose.model('Literature');
var utils = require('../../lib/utils');

exports.fetchById = function (req, res) {
  res.render('literature/detail', {
    title: 'Cloud Computing'
  });
}

exports.create = function (req, res) {
  var literature = new Literature(req.body);
  literature.save(function (err) {
    if (err) throw err;
    Literature.findById(literature._id, function (err, doc) {
      if (err) throw err;
      res.send(doc);
    })
  });
}