const tableService = require('../services/tableService');

const getAlltables = async (_req, res) => {
    const tables = await tableService.getAllTables();
    return res.status(200).json(tables);
};

const findOrCreateTableOrder = async (req, res) => {
    const { id } = req.params
    const order = await tableService.findOrCreateTableOrder({ tableId:id });
    return res.status(200).json(order[0]);
};

const updateTableOrder = async (req, res) => {
    const { id } = req.params;
    const { total, status } = req.body;
  
    const updatedOrder = await tableService.updateTableOrder(id, total, status);
  
    return res.status(200).json(updatedOrder);
};

module.exports = {
    getAlltables,
    findOrCreateTableOrder,
    updateTableOrder,
}

