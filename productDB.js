const connectdb = require("./connectDB/connect");

//get the models

const Product = require("./models/product");

const ProductJson = require("./products.json");

const start = async () => {
  try {
    await connectdb(uri);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};
start();
