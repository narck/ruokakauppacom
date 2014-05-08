'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Product Schema
 */
var ProductSchema = new Schema({
  sku: Number,
  name: String,
  price: Number,
  category: String,
  subcategory: String,
  imgurl: String,
  availability: String,
  stock: Number,
  score: Number
});

var keke="asd"
/**
 * Validations
 */

 // heh

mongoose.model('Product', ProductSchema);
