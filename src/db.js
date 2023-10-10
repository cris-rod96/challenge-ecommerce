require("dotenv").config();
const { Sequelize } = require("sequelize");
const ProductModel = require("./model/producto");

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const sequelize = new Sequelize(`
postgres://${DB_USER}:${DB_PASSWORD}@localhost/${DB_NAME}
`);

ProductModel(sequelize);
const { Product } = sequelize.models;
module.exports = {
  Product,
  conn: sequelize,
};
