const { Product } = require("../db");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      await Product.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({
        message: "PRODUCTO ELIMINADO",
      });
    }
    return res.status(401).json({
      message: "FALTAN DATOS",
    });
  } catch ({ message }) {
    return res.status(500).json({
      message,
    });
  }
};

module.exports = { deleteProduct };
