const { Product } = require("../db");

const postProduct = async (req, res) => {
  try {
    const { name, description, price, stock, inOffer, image } = req.body;
    if ((name, description, price, stock, image)) {
      const newProduct = await Product.findOrCreate({
        where: {
          name,
        },
        defaults: { ...req.body },
      });
      if (newProduct) {
        return res.status(200).json(newProduct);
      }
    }
    return res.status(400).json({
      message: `BAD REQUEST. FALTA INFORMACIÓN`,
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
    });
  }
};

module.exports = { postProduct };
