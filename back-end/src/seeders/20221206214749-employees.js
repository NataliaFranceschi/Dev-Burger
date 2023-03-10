module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('employees',
      [{
        id: 1,
        name: 'Rafaela Siva',
        email: 'rafaela@db.com',
        password: '123456',
        position_held: 'Manager',
      },
      {
        id: 2,
        name: 'Joana Andrade',
        email: 'joana@db.com',
        password: '123456',
        position_held: 'Waitress',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
  },
};
