require("dotenv").config();

module.exports = {
  db: "sales_history",
  user: "root",
  password: process.env.DBPASSWORD,
  host: "localhost",
  dialect: "mysql",
};
