module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productCategory: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    pricePerUnit: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    stockAvailable: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
    },
  });

  return Product;
};
