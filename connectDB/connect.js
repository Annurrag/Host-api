const mongoose = require("mongoose");

uri =
  "mongodb+srv://Learning_Products_API:N4RtFC7QUwuQaV3q@productsapi.nzcvwnc.mongodb.net/";

const connectdb = () => {
  console.log("database connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectdb;
