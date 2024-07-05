const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Product service listening at http://localhost:${PORT}`);
});
