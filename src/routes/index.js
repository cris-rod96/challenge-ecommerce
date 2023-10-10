const {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers");

const router = require("express").Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", postProduct);
router.put("/products/:id", putProduct);
router.delete("/products/:id", deleteProduct);
module.exports = { router };
