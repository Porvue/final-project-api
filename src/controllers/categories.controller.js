const Category = require('../models/categories.model');

module.exports = {
  createCategory: async (req, res) => {
    const category = new Category({
      name: req.body.name,
    });
    try {
      const result = await category.save();
      res.status(200).json({data:result,message:"created successfuly"});
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  getCategories: async (req, res) => {
    try {
      const result = await Category.find(); 
      res.status(200).json({data:result,message:"get successfuly"});
    } catch (err) {
      res.status(400).send(err.message);
    }
  },
  }