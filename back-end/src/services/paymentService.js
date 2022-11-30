const { OrderPayment, PaymentMethod } = require('../models');

const createOrderPayment = ({ orderId, paymentId, value }) => OrderPayment
    .create({ orderId, paymentId, value });

const getAllPaymentMethod = () => PaymentMethod.findAll();

const getPaymentByOrderId = ({orderId}) => OrderPayment.findAll({ where: { orderId } });

module.exports = {
    createOrderPayment,
    getAllPaymentMethod,
    getPaymentByOrderId,
};