require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');

const Product = require('./models/product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany({});

        console.log('Data has been imported successfully');

        process.exit();
    } catch (err) {
        console.error('Error with the db import');
        process.exit(1);
    }
};

importData();
