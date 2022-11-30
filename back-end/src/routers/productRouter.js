const express = require('express');
const productController = require('../controller/productController');
const  validadeToken  = require('../middlewares/validateToken');
const  { validateProduct, validateUpdateProduct }  = require('../middlewares/validadeField');

const router = express.Router();

router.get(
  '/',
  productController.getAllProducts,
);

router.get(
  '/:id',
  productController.getProductById,
);

router.post(
  '/',
  validadeToken,
  validateProduct,
  productController.createProduct,
);

router.put(
  '/:id',
  validadeToken,
  validateUpdateProduct,
  productController.updateProduct,
);

router.delete(
  '/:id',
  validadeToken,
  productController.deleteProduct,
);

module.exports = router;
