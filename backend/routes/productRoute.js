const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getAllProductsById,
} = require('../controller/productController');

/**
 * Get all the products from the databse
 *
 * @route GET api/v1/products
 *
 * @access public
 */

router.get('api/products', getAllProducts)

/**
 * Get a product  by id from the database
 *
 * @route GET api/v1/product/:id
 *
 * @access public
 */

router.get('products/:id', getAllProductsById)
module.exports = router;
