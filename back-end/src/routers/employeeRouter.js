const express = require('express');
const employeeController = require('../controller/employeeController');
const  { validateEmployee, validateUpdateEmployee }  = require('../middlewares/validadeField')
const  validadeToken  = require('../middlewares/validateToken');

const router = express.Router();

router.get(
  '/',
  employeeController.getAllEmployees,
);

router.get(
  '/:id',
  employeeController.getEmployeeById,
);

router.post(
  '/',
  validadeToken,
  validateEmployee,
  employeeController.createEmployee,
);

router.put(
  '/:id',
  validadeToken,
  validateUpdateEmployee,
  employeeController.updateEmployee,
);

router.delete(
  '/:id',
  validadeToken,
  employeeController.deleteEmployee,
);

module.exports = router;
