const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
require('dotenv').config('./.env.local');

const app = express();

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: `http://${process.env.CLIENT_BASE_URL}:${process.env.CLIENT_PORT}`
}))

cloudinary.config({ 
  cloud_name: 'dhqgqznbw', 
  api_key: '818335363575158', 
  api_secret: 'biK7v6mHxzMdJ398ebRqywEB3wo' 
});

app.use('/api/auth', require('./routes/auth'));

app.use('/api/products', require('./routes/products'));

app.use('/api/categories', require('./routes/categories'));


app.use('/', require('./routes/products'));



app.listen(process.env.SERVER_PORT, process.env.SERVER_BASE_URL, () => {
  console.log(`Server running at: http://${process.env.SERVER_BASE_URL}:${process.env.SERVER_PORT}`);
})