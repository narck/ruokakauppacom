'use strict';

var mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.show = function (req, res, next) {
  var id = req.params.id;

  Product.findOne({'sku':id}, function (err, product) {
    if (err) return next(err);
    if (!product) return res.send(404);

    res.send( product );
  });
};

exports.list = function(req, res, next) {
  
  Product.find(
    {},
    function (err, products) {
    if (!err){
      // for debugging
      //console.log(products);
      res.send( products );
    } else {throw err;}    
  });
};