var mongoose = require('mongoose');


Mongo_url ="mongodb+srv://Mongoadmin:12345@webproject.btvss.mongodb.net/<dbname>?retryWrites=true&w=majority";
  
  const connectDB = async()=> {
      await mongoose.connect(Mongo_url, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("Successfully Connected To Mogoose");
  }

  module.exports = connectDB;