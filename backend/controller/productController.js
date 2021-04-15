const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);

        res.status(500).json({ message: 'Server error' });
    }
};

const getAllProductsById = async (req, res) => {
    try {
        const products = await Product.findById({});

        res.json(product);
    } catch (error) {
        console.error(error);

        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAllProducts,
    getAllProductsById,
};
