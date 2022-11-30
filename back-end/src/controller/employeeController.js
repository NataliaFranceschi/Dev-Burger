const employeeService = require('../services/employeeService');

const createEmployee = async (req, res) => {
    const { name, email, password, positionHeld } = req.body;
    const newEmployee = await employeeService.createEmployee({ name, email, password, positionHeld });
    return res.status(201).json(newEmployee);
};

const getAllEmployees = async (_req, res) => {
    const employees = await employeeService.getAllEmployees();
    return res.status(200).json(employees);
};

const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, email, password, positionHeld } = req.body
    const updated = await employeeService.updateEmployee(id, name, email, password, positionHeld)
    return res.status(200).json(updated); 
};

const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await employeeService.deleteEmployee(id);
    return res.status(204).end();
};

const getEmployeeById = async (req, res) => {
    const { id } = req.params;
    const employee = await employeeService.getEmployeeById(id);
    return res.status(200).json(employee);
  };

module.exports = {
    createEmployee,
    getAllEmployees,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
}