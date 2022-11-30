module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('order_product',
      [
        {
          product_id: 3,
          order_id: 1,
          quantity: 2,
        },
        {
          product_id: 8,
          order_id: 1,
          quantity: 1,
        },
        {
          product_id: 2,
          order_id: 2,
          quantity: 1,
        },
        {
          product_id: 6,
          order_id: 2,
          quantity: 1,
        },
        {
          product_id: 8,
          order_id: 2,
          quantity: 1,
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('order_product', null, {});
  },
};
