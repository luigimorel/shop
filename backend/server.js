const express = require('express');
const connectDB = require('./config/db');
const productRoute = require('./routes/productRoute');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API running...' });
});

app.use('api/v1//products', productRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
