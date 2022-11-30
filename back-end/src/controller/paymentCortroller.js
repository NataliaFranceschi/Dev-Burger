const paymentService = require('../services/paymentService');

const createOrderPayment = async (req, res) => {
    const { id } = req.params;
    const { paymentId, value } = req.body;
    const orderId = Number(id)
  
    const newOrderPayment = await paymentService.createOrderPayment({ orderId, paymentId, value });
  
    return res.status(201).json(newOrderPayment);
};

const getPaymentByOrderId = async (req, res) => {
    const { id } = req.params;
    try {
        const payment = await paymentService.getPaymentByOrderId({ orderId:id }); 
        return res.status(200).json(payment);
    } catch (error){
        return res.status(401).json({ message: 'invalid orderId or paymentId' });
    }
};

const getAllPaymentMethod = async (_req, res) => {
  
    const paymentMethod = await paymentService.getAllPaymentMethod();
  
    return res.status(200).json(paymentMethod);
};

module.exports = {
    createOrderPayment,
    getPaymentByOrderId,
    getAllPaymentMethod,
}