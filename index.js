const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const serverUrl = 'localhost';
const serverPort = 8000;

app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({
  extended: true,
  limit: '25mb',
}));

app.use(cors({
  origin: '*',
}));

app.use('/api/auth', require('./src/routes/auth'));

app.use('/api/products', require('./src/routes/products'));

app.use('/api/categories', require('./src/routes/categories'));

app.get('/test', (req, res) => {
  res.send('Hola mundo');
});


app.use('/', require('./src/routes/products'));


try {
	app.listen(serverPort, serverUrl, () => {
		console.log(`Server running at: http://${serverUrl}:${serverPort}`);
	});
} catch (error) {
	console.log('Algo salio mal ' + error)
}
