module.exports = (sequelize, DataTypes) => {
  const SalesTransaction = sequelize.define("salestransaction", {
    orderId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "PENDING",
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return SalesTransaction;
};
