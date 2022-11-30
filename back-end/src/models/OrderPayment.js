const OrderPaymentModel = (sequelize, DataTypes) => {
    const OrderPayment = sequelize.define('OrderPayment', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      orderId: DataTypes.INTEGER,
      paymentId: DataTypes.INTEGER,
      value: DataTypes.DOUBLE,
     },
    {
        timestamps: false,
        tableName: 'order_payment',
        underscored: true,
      });
    
      OrderPayment.associate = (models) => {
        models.PaymentMethod.belongsToMany(models.Order, {
          as: 'orders',
          through: OrderPayment,
          foreignKey: 'paymentId', 
          otherKey: 'orderId', 
        });
        models.Order.belongsToMany(models.PaymentMethod, {
          as: 'payment_method',
          through: OrderPayment,
          foreignKey: 'orderId',  
          otherKey: 'paymentId',
        });
      };
  
    return OrderPayment;
  };
  
module.exports = OrderPaymentModel;