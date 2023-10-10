const { Product } = require("../db");

const getProducts = async (req, res) => {
  try {
    const myProducts = await Product.findAll();
    if (myProducts.length > 0) {
      return res.status(200).json(myProducts);
    }
    return res.status(200).json({
      message: "NO HAY PRODUCTOS",
    });
  } catch (error) {}
};

module.exports = { getProducts };
