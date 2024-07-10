const Category = require('../models/categories.model');

const category = new Category({
    name: req.body.name,
    description: req.body.description,
  });
  try {
    const result = await category.save();
    res.status(200).json({data:result,message:"created successfuly"});
  } catch (err) {
    res.status(400).send(err.message);
  }
