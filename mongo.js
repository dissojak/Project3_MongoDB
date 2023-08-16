const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://dissojak:stoondissojakb2a@stoon.r8tcyqv.mongodb.net/Products?retryWrites=true&w=majority";

// There is a problem with the Closing function , so i just commented it out !

exports.createProduct = async (req, res, next) => {
  const { name, price } = req.body;
  const newProduct = {
    name,
    price,
  };
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (e) {
    return res.json({ message: "Could not store data !" });
  }
  // client.close();
  res.json(newProduct);
};

exports.getProduct = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (e) {
    return res.json({ message: "Could not retrieve product" });
  }
  // client.close();
  res.json({ products });
};
