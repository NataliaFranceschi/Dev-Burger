module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('orders',
      [
        {
          id: 1,
          total: 9.90,
          status: 'closed',
          table_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          total: 5.70,
          status: 'active',
          table_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
      ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
