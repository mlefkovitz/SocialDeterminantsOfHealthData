'use strict';

var validator = require('validator'),
  path = require('path'),
  mongoose = require('mongoose'),
  config = require(path.resolve('./config/config'));

var ZipRecord = mongoose.model('ZipRecord', {
  zip: String,
  score: Number
}, 'mazips');


exports.scoreZip = function (req, res) {
  var record = {};
  console.log(req.params.zipCode);
  ZipRecord.findOne({ zip: req.params.zipCode }, function(err, record) {
    if (err) {
      return res.status(500).send({ message: err });
    } else if (!record) {
      return res.status(404).send({
        message: "Zip code not found!"
      });
    } else {
      console.log(record);
      res.json(record.score);
    }
  });
};


/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {
  var safeUserObject = null;
  if (req.user) {
    safeUserObject = {
      displayName: validator.escape(req.user.displayName),
      provider: validator.escape(req.user.provider),
      username: validator.escape(req.user.username),
      created: req.user.created.toString(),
      roles: req.user.roles,
      profileImageURL: req.user.profileImageURL,
      email: validator.escape(req.user.email),
      lastName: validator.escape(req.user.lastName),
      firstName: validator.escape(req.user.firstName),
      additionalProvidersData: req.user.additionalProvidersData
    };
  }

  res.render('modules/core/server/views/index', {
    user: JSON.stringify(safeUserObject),
    sharedConfig: JSON.stringify(config.shared)
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};
