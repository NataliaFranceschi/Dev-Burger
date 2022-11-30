const employeeService = require('../services/employeeService');
const { createToken } = require('../auth/jwtFunctions');

const login = async (req, res) => {
    const employee = req.body;
    const login = await employeeService.getByEmail(employee);

    if (!login) {
      return res.status(400).json({ message: 'Unauthorized e-mail' });
    } else if (login.password !== employee.password) {
      return res.status(400).json({ message: 'Invalid password' });
    }
  
    const token = createToken(employee);
    return res.status(200).json({ token, positionHeld: login.positionHeld });
  };

module.exports = {
    login
}