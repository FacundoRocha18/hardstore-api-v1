const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use( express.json() );

app.use( express.urlencoded({
  extended: true
}));

app.use(cors());

app.use('/api/auth', require('./routes/auth'));

app.use('/api/products', require('./routes/products'));
app.use('/', require('./routes/products'));


app.listen( process.env.PORT2, () => {
  console.log(`Server running at: http://localhost:${process.env.PORT2}`);
})