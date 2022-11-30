const OrderProductModel = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define('OrderProduct', {
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
     },
    {
        timestamps: false,
        tableName: 'order_product',
        underscored: true,
      });
    
      OrderProduct.associate = (models) => {
        models.Product.belongsToMany(models.Order, {
          as: 'orders',
          through: OrderProduct,
          foreignKey: 'productId', 
          otherKey: 'orderId', 
        });
        models.Order.belongsToMany(models.Product, {
          as: 'products',
          through: OrderProduct,
          foreignKey: 'orderId',  
          otherKey: 'productId',
        });
      };
  
    return OrderProduct;
  };
  
module.exports = OrderProductModel;