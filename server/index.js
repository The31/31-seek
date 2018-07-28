const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const auth = require('./routes/auth.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/auth', auth);

app.listen(PORT, () => console.log('listening to port 3000.'));