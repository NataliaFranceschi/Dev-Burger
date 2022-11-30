const OrderModel = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        total: { type: DataTypes.INTEGER, defaultValue: 00 },
        status: { type: DataTypes.STRING, defaultValue: 'active' },
        tableId: DataTypes.INTEGER,
        createdAt: DataTypes.DATEONLY,
        updatedAt: DataTypes.DATEONLY,
    },
    {
        timestamps: true,
        tableName: 'orders',
        underscored: true,
      });
    
      Order.associate = (models) => {
        Order.belongsTo(models.Table, 
        { foreignKey: 'tableId', as: 'table' });
    };
  
    return Order;
  };
  
module.exports = OrderModel;