const mongoose = require('mongoose');
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  stock:{
    type: Number,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
