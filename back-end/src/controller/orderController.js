const orderService = require('../services/orderService');

const findAllActiveOrders = async (_req, res) => {
    
    const orders = await orderService.findAllActiveOrders()
    
    return res.status(200).json(orders); 
};


const findOrderProductbyId = async (req, res) => {
    const { id } = req.params;
    const order = await orderService.findOrderProductbyId(id)
    return res.status(200).json(order); 
};

const createOrderProduct = async (req, res) => {
    const { id } = req.params;
    const { productId, quantity } = req.body
    const orderId = Number(id)
    const newOrder = await orderService.createOrderProduct({ orderId, productId, quantity })
    return res.status(201).json(newOrder);

};

const updateOrderProduct = async (req, res) => {
    const { id } = req.params;
    const { productId, quantity } = req.body
    const updated = await orderService.updateOrderProduct(id, productId, quantity)
    return res.status(200).json(updated); 
};

const deleteOrderProduct = async (req, res) => {
    const { id } = req.params;
    const { productId } = req.body;
    await orderService.deleteOrderProduct(productId, id);
    return res.status(204).end();
};

const searchOrders = async (req, res) => {
    const { q } = req.query;
    const orders = await orderService.searchOrders(q);
    return res.status(200).json(orders);
  }; 


module.exports = {
    findOrderProductbyId,
    findAllActiveOrders,
    createOrderProduct,
    updateOrderProduct,
    deleteOrderProduct,
    searchOrders,
}