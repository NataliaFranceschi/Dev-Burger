const express = require('express');
const paymentController = require('../controller/paymentCortroller');
const  { validateOrderPayment }  = require('../middlewares/validadeField')
const  validadeToken  = require('../middlewares/validateToken');

const router = express.Router();

router.get(
  '/',
  paymentController.getAllPaymentMethod,
);

router.get(
  '/:id',
  paymentController.getPaymentByOrderId,
);

router.post(
  '/:id',
  validadeToken,
  validateOrderPayment,
  paymentController.createOrderPayment,
);

module.exports = router;
