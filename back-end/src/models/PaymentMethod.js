const PaymentMethodModel = (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define('PaymentMethod', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        method: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'payment_method',
        underscored: true,
      });

    return PaymentMethod;
  };
  
module.exports = PaymentMethodModel;