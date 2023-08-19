// mongoDB Password : PxfaC4khZej1lWnt

//dtabase : N4RtFC7QUwuQaV3q

//  mongodb+srv://Learning_Products_API:<password>@productsapi.nzcvwnc.mongodb.net/

const express = require("express");
const app = express();
const connectdb = require("./connectDB/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hi i'm live");
});

app.use("/api/products", products_routes);

//listen the respone
const start = async () => {
  try {
    await connectdb();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
