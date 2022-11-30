const express = require('express');
const cors = require('cors');
const router = require('./routers');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/table', router.tableRouter);

app.use('/order', router.orderRouter);

app.use('/product', router.productRouter);

app.use('/payment', router.paymentRouter);

app.use('/employee', router.employeeRouter);

app.use('/login', router.loginRouter);

module.exports = app;
