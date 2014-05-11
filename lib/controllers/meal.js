'use strict';

/* Create a delicious, five-star three-course meal */

var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

/* use require ? */

var Meal = { 
  first: { drink: "", dish: ""},
  second: { drink: "", dish: ""},
  third: { drink: "", dish: ""},
  link: "",
  total: ""
}

exports.create = function(req, res) {
  return Product.find({subcategory:"Snacksit"}, function (err, things) {
    if (!err) {
      return res.json(drinks[0]);
    } else {
      return res.send(err);
    }
  });
};
