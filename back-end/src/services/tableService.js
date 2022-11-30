const { Table, Order } = require('../models');

const getAllTables = () => Table.findAll()

const getActiveTables = () => {
    const tables = Order.findAll({
        where: { status: 'active' } ,
        
    });
    return tables;
};

const findOrCreateTableOrder = ({ tableId }) => Order.findOrCreate({ 
    where: { tableId, status: 'active' }});

const updateTableOrder = async (id, total, status) => {
    const [updateTableOrder] = await Order.update(
      { total, status },
      { where: { tableId: id, status: 'active' } },
    );
    return updateTableOrder;
}

module.exports = {
    getAllTables,
    getActiveTables,
    findOrCreateTableOrder,
    updateTableOrder,
}