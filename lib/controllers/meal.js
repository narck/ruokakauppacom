'use strict';

/* Create a delicious, five-star three-course meal */

/* use require ? */


var Meal = { 
  first: {},
  second: {},
  third: {},
  link: {}
}

exports.create = function(req, res) {
  var meal = Meal;
  return res.json(meal)
};
