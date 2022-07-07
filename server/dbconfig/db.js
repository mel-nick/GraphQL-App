const mongoose = require('mongoose');

mongoose.set('debug', true);

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `MongoDB connected: ${connect.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
