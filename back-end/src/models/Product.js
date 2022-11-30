const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        product: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'products',
        underscored: true,
      });

    return Product;
  };
  
module.exports = ProductModel;