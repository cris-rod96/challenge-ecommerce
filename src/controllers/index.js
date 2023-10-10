const { deleteProduct } = require("./deleteProduct");
const { getProduct } = require("./getProduct");
const { getProducts } = require("./getProducts");
const { postProduct } = require("./postProduct");
const { putProduct } = require("./putProduct");
module.exports = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
