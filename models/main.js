const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../configs/dbConfig");

const sequelize = new Sequelize(dbConfig.db, dbConfig.host, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

//authenticate

sequelize
  .authenticate()
  .then((resp) => {
    console.log("Database connected and authenticated successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//create single instance for all

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
const Product = require("../models/productModel");
db.products = Product(sequelize, DataTypes);
const salesTransactions = require("../models/salesTransactionModel");
db.salestransactions = salesTransactions(sequelize, DataTypes);
const Customer = require("./customerModel");
db.customer = Customer(sequelize, DataTypes);

db.sequelize
  .sync()
  .then((resp) => {
    console.log("DB sync done");
  })
  .catch((err) => {
    console.log(err);
  });

//associations

Product.hasMany(salesTransactions, { foreignKey: "productId" });
salesTransactions.belongsTo(Product, { foreignKey: "productId" });

Customer.hasMany(salesTransactions, { foreignKey: "customerId" });
salesTransactions.belongsTo(Customer, { foreignKey: "customerId" });

module.exports = db;
