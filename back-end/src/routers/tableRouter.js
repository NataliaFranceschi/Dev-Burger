const express = require('express');
const tableController = require('../controller/tableController');
const  validadeToken  = require('../middlewares/validateToken');

const router = express.Router();

router.get(
  '/',
  validadeToken,
  tableController.getAlltables,
);

router.post(
  '/:id',
  tableController.findOrCreateTableOrder,
);

router.put(
  '/:id',
  tableController.updateTableOrder,
);

module.exports = router;
