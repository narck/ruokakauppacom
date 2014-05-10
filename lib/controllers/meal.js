'use strict';

var mongoose = require('mongoose'),
    Meal = mongoose.model('Product');



/* Create a delicious, five-star three-course meal */

exports.create = function(req, res) {
  return Meal.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
