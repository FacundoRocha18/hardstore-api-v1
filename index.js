const express = require('express');
const cors = require('cors');
const cloudinary = require('cloudinary');
require('dotenv').config();

const app = express();

const server_url =  process.env.HOST || '0.0.0.0' || '206.246.74.221';

const server_port = process.env.PORT || 8080;

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: '*'
}))

cloudinary.config({ 
  cloud_name: 'dhqgqznbw', 
  api_key: '818335363575158', 
  api_secret: 'biK7v6mHxzMdJ398ebRqywEB3wo' 
});

app.use('/api/auth', require('./routes/auth'));

app.use('/api/products', require('./routes/products'));

app.use('/api/categories', require('./routes/categories'));

app.get('/test', (req, res) => {
	res.send('Hola mundo')
})


app.use('/', require('./routes/products'));



app.listen(base_port, '0.0.0.0', () => {
  console.log(`Server running at: http://${base_url}:${base_port}`);
})
