const { Product } = require("../db");

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const product = await Product.findOne({
        where: {
          id,
        },
      });
      if (product) {
        return res.status(200).json(product);
      }
      return res.status(401).json({
        message: "PRODUCT NOT FOUND",
      });
    }
  } catch (error) {}
};

module.exports = { getProduct };
