const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect(
    "mongodb+srv://dissojak:stoondissojakb2a@stoon.r8tcyqv.mongodb.net/Products?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database !");
  })
  .catch(() => {
    console.log("Connection failed !");
  });

exports.createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const createdProduct = new Product({
    name,
    price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

exports.getProduct = async (req, res, next) => {
    const products=await Product.find().exec();
    res.json({products});
}