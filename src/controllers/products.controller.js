const Product = require('../models/products.model');

module.exports = {
    createProdcut: async (req, res) => {
        const { name, price, description, category, stock ,image} = req.body;
        const product = new Product({ name, price, description, category, stock ,image});
        try{
            const result = await product.save();
            res.status(200).json({data:result,message:"created successfuly"});  
        }catch(err){
            res.status(400).send(err.message);
        }
    },
    upDateProduct: async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (!product) res.status(404).json("Product Not Found");
        const { name, price, description, category, stock ,image} = req.body;
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;
        product.stock = stock || product.stock;
        product.image = image || product.image;
        try{
            const result = await product.save();
            res.status(200).json({data:result,message:"created successfuly"});  
        }catch(err){
            res.status(400).send(err.message);
        }
    },
    deleteProduct: async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (!product) res.status(404).json("Product Not Found");
        try{
            const result = await product.remove();
            res.status(200).json({data:result,message:"deleted successfuly"});  
        }catch(err){
            res.status(400).send(err.message);
        }
    },
    getProducts: async (req, res) => {
        try{
            const products = await Product.find().populate('category');
        res.status(200).json({ data: products });
        }catch(err){
            res.status(400).json(err.message);
        }
    },
    getProduct: async (req, res) => {
        try{
            const product = await Product.findById(req.params.id).populate('category');
            if (!product) res.status(404).json("Product Not Found");
            res.status(200).json({ data: product, message: "get successfuly" });
        }catch(err){
            res.status(400).json(err.message);
        }
    }
    ,
    searchProduct: async (req, res) => {
      try{
        const products = await Product.find({ name: { $regex: req.params.name, $options: 'i' } });
        if (!products) res.status(404).json("Product Not Found");
        res.status(200).json({ data: products, message: "get successfuly" });
      }catch(err){
        res.status(400).json(err.message);
      }
    }
}