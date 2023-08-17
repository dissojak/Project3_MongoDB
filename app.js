const express = require('express');
const bodyParser = require('body-parser');
const MP = require('./mongoose'); 


const app = express();

app.use(bodyParser.json());

app.post('/api/products',MP.createProduct);

// app.get('/api/products',MP.getProduct);

app.listen(5000);