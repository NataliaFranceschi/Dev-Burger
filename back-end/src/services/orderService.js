const { Order, OrderProduct, Product } = require('../models');
const { Op } = require('sequelize');

const findAllActiveOrders = () => Order.findAll({ where: { status: 'active' } })

const findOrderProductbyId = async (id) => {
    const order = await Order.findAll({
        where: { id },
        include: [{ model: Product, as: 'products' }],
    })
    return order
}

const createOrderProduct = ({ orderId, productId, quantity }) => OrderProduct
    .create({ orderId, productId, quantity });

const updateOrderProduct = async (orderId, productId, quantity) => {
    const [updatedOrderProduct] = await OrderProduct.update(
      { quantity },
      { where: { orderId , productId } },
    );
    return updatedOrderProduct;
}

const deleteOrderProduct = async (productId, id) => {
    const order = await OrderProduct.destroy(
      { where: { productId, orderId:id } },
    );
  
    return order;
};

const searchOrders = async (q) => {
    const orders = await Order.findAll({
        where: { createdAt: { [Op.substring]: q }},
        attributes: { exclude: ['status', 'updatedAt'] },
        });
    return orders;
}; 

module.exports = {
    findAllActiveOrders,
    findOrderProductbyId,
    createOrderProduct,
    updateOrderProduct,
    deleteOrderProduct,
    searchOrders,
}