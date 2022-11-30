const productService = require('../services/productService');

const createProduct = async (req, res) => {
    const { product, price, description, image } = req.body;
    const newProduct = await productService.createProduct({ product, price, description, image });
    return res.status(201).json(newProduct);
};

const getAllProducts = async (_req, res) => {
    const products = await productService.getAllProducts();
    return res.status(200).json(products);
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { product, price, description, image } = req.body
    const updated = await productService.updateProduct(id, product, price, description, image)
    return res.status(200).json(updated); 
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    return res.status(200).json(product);
  };

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await productService.deleteProduct(id);
    return res.status(204).end();
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    getProductById,
    deleteProduct,
}