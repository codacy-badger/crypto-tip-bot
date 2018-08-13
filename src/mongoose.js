import mongoose from 'mongoose';
import logger from './logger';
import config from './config/config';

mongoose.Promise = global.Promise;

/**
 * Generate the connection string URI from config.
 * @returns {String}
 */
function setConnectionURI() {
  const mongoURI = `mongodb://${config.mongoDB.host}:${config.mongoDB.port}/${config.mongoDB.database}`;

  return mongoURI;
}

/**
 * Login to MongoDB database.
 * @returns {Promise}
 */
function login() {
  mongoose.connect(setConnectionURI(), { useNewUrlParser: true });

  const db = mongoose.connection;
  db.on('error', () => {
    logger.onError('Could not connect to the database...');
  });
  db.once('open', () => {
    logger.onInfo('Connected to MongoDB...');
  });

  return db;
}

export default {
  login
};
