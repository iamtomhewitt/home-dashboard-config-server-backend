const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
};
