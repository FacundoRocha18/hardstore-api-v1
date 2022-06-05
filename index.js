const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: 'http://192.168.1.8:4000'
}))

app.use('/api/auth', require('./routes/auth'));

app.use('/api/products', require('./routes/products'));

app.use('/api/categories', require('./routes/categories'));


app.use('/', require('./routes/products'));



app.listen(process.env.APIPORT, () => {
  console.log(`Server running at: http://localhost:${process.env.APIPORT}`);
})