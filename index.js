const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const server_url = 'localhost';

const server_port = 4000;

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(cors({
  origin: '*'
}))

app.use('/api/auth', require('./routes/auth'));

app.use('/api/products', require('./routes/products'));

app.use('/api/categories', require('./routes/categories'));

app.get('/test', (req, res) => {
	res.send('Hola mundo')
})


app.use('/', require('./routes/products'));



app.listen(server_port, server_url, () => {
  console.log(`Server running at: http://${server_url}:${server_port}`);
})
