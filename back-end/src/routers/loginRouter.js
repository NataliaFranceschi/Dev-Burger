const express = require('express');
const loginController = require('../controller/loginController');
const  { validateLogin }  = require('../middlewares/validadeField')

const router = express.Router();

router.post(
  '/',
  validateLogin,
  loginController.login,
);

module.exports = router;