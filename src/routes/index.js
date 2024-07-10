const express = require("express");
const category = require("../controllers/categories.controller")
const product = require("../controllers/products.controller")
const router = express.Router();

router.post("/categories/create", category.createCategory);
router.get("/categories/get", category.getCategories);
// product
router.post("/products/create", product.createProdcut);
router.get("/products/get", product.getProducts);
router.get("/products/get/:id", product.getProduct);
router.put("/products/update/:id", product.upDateProduct);
router.delete("/products/delete/:id", product.deleteProduct);
router.get("/products/search/:name", product.searchProduct);







module.exports = router