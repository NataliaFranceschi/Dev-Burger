module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('payment_method',
      [
        {
          id: 1,
          method: 'Credit card',
        },
        {
          id: 2,
          method: 'Debit card',
        },
        {
          id: 3,
          method: 'Cash',
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('payment_method', null, {});
  },
};
