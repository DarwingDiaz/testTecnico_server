require('dotenv').config();

const server = require('./src/app.js');
const mongoose = require('./src/db.js');

mongoose.connection.once('open', () => {
  server.listen(3001, () => {
    console.log('listening at 3001'); 
  });
});