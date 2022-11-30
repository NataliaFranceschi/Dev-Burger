const express = require('express');
const orderController = require('../controller/orderController');
const  { validateOrderProduct }  = require('../middlewares/validadeField')
const  validadeToken  = require('../middlewares/validateToken');

const router = express.Router();

router.get(
  '/',
  orderController.findAllActiveOrders,
);

router.get(
  '/search',
  orderController.searchOrders,
);

router.get(
  '/:id',
  orderController.findOrderProductbyId,
);

router.post(
  '/:id',
  validadeToken,
  validateOrderProduct,
  orderController.createOrderProduct,
);

router.put(
  '/:id',
  validadeToken,
  orderController.updateOrderProduct,
);

router.delete(
  '/:id',
  validadeToken,
  orderController.deleteOrderProduct,
);

module.exports = router;
