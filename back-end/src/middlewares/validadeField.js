const Joi = require('joi');

const checkProduct = Joi.object({
    product: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string(),
    image: Joi.string()
  }).required().messages({
    'any.required': 'Some required fields are missing',
    
});

const checkUpdateProduct = Joi.object({
    product: Joi.string(),
    price: Joi.number(),
    description: Joi.string(),
    image: Joi.string()
})

const checkOrderPayment = Joi.object({
    paymentId: Joi.number().required(),
    value: Joi.number().required(),
  }).required().messages({
    'any.required': 'Some required fields are missing',
    
});

const checkOrderProduct = Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().required(),
  }).required().messages({
    'any.required': 'Some required fields are missing',
    
});

const checkEmployee = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    positionHeld: Joi.string().required(),
    password: Joi.string().required(),
  }).required().messages({
    'any.required': 'Some required fields are missing',
    
});

const checkUpdateEmployee = Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    positionHeld: Joi.string(),
    password: Joi.string()
})

const checkLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).required().messages({
    'any.required': 'Some required fields are missing',
    'string.email': '{#label} must be a valid email',
});

const validate = async (req, res, next, check) => {
    const info = req.body;
    const { error } = check.validate(info);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
  
    next();
};

const validateProduct = async (req, res, next) => {
    validate(req, res, next, checkProduct);
};

const validateOrderPayment = async (req, res, next) => {
    validate(req, res, next, checkOrderPayment);
};

const validateOrderProduct = async (req, res, next) => {
    validate(req, res, next, checkOrderProduct);
};

const validateUpdateProduct = async (req, res, next) => {
    validate(req, res, next, checkUpdateProduct);
};

const validateEmployee = async (req, res, next) => {
    validate(req, res, next, checkEmployee);
};

const validateUpdateEmployee = async (req, res, next) => {
    validate(req, res, next, checkUpdateEmployee);
};

const validateLogin = async (req, res, next) => {
    validate(req, res, next, checkLogin);
};

module.exports = { 
    validateProduct, 
    validateOrderPayment, 
    validateOrderProduct,
    validateUpdateProduct,
    validateEmployee,
    validateUpdateEmployee,
    validateLogin,
}
