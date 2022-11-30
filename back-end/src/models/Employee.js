const EmployeeModel = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        positionHeld: DataTypes.STRING,
    },
    {
        timestamps: false,
        tableName: 'employees',
        underscored: true,
      });

    return Employee;
  };
  
module.exports = EmployeeModel;