const TableModel = (sequelize, DataTypes) => {
    const Table = sequelize.define('Table', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        number: DataTypes.INTEGER,
    },
    {
        timestamps: false,
        tableName: 'tables',
        underscored: true,
      });

    return Table;
  };
  
module.exports = TableModel;