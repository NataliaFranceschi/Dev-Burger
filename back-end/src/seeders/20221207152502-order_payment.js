module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('order_payment',
      [
        {
          id:1,
          order_id: 1,
          payment_id: 1,
          value: 4.20,
        },
        {
          id:2,
          order_id: 1,
          payment_id: 2,
          value: 5.70,
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('order_payment', null, {});
  },
};
