const Products = require("../models/product");

const getAllProducts = async (req, res) => {
  const products = await Products.find(req.query);
  res.status(200).json({ products });
};

const getAllProductsTesting = async (req, res) => {
  const products = await Products.find(req.query); // req.query is used for searching sorting and filtering the data
  res.status(200).json({ products });
};

module.exports = { getAllProducts, getAllProductsTesting };
