const { Product } = require('../models');

const createProduct = ({ product, price, description, image }) => Product
    .create({ product, price, description, image });

const getAllProducts = () => Product.findAll();

const updateProduct = async (id, product, price, description, image) => {
    const [updatedProduct] = await Product.update(
      { product, price, description, image  },
      { where: { id } },
    );
    return updatedProduct;
}

const getProductById = (id) => Product.findByPk(id);

const deleteProduct = async (id) => {
    const product = await Product.destroy(
      { where: { id } },
    );
  
    return product;
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    getProductById,
    deleteProduct,
};