const { Product } = require("../db");

const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { stock, price } = req.body;
    if (id && stock && price) {
      const productUpdated = await Product.update(
        { ...req.body },
        {
          where: {
            id,
          },
        }
      );

      if (productUpdated) {
        return res.status(200).json({
          message: "PRODUCTO ACTUALIZDO",
        });
      }
    }
    return res.status(400).json({
      message: "Faltan datos",
    });
  } catch (error) {}
};

module.exports = { putProduct };
