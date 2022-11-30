const { Employee } = require('../models');

const createEmployee = ({ name, email, password, positionHeld }) => Employee
    .create({ name, email, password, positionHeld });

const getAllEmployees = () => Employee.findAll({
    attributes: { exclude: ['password'] },
});

const updateEmployee = async (id, name, email, password, positionHeld) => {
    const [updatedEmployee] = await Employee.update(
      { name, email, password, positionHeld  },
      { where: { id } },
    );
    return updatedEmployee;
}

const getByEmail = ({ email }) => Employee.findOne({ where: { email } });

const deleteEmployee = async (id) => {
    const employee = await Employee.destroy(
      { where: { id } },
    );
  
    return employee;
};

const getEmployeeById = (id) => Employee.findByPk(id);

module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    getByEmail,
    deleteEmployee,
    getEmployeeById,
};