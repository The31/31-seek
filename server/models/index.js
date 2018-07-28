const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const MONGO_URI = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PW}@ds245901.mlab.com:45901/31-seek-db`;
if(!MONGO_URI){
  throw new Error('Please provide a valid mLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error));

module.exports = db;