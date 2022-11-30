'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.DOUBLE,
      },
      status: {
        type: Sequelize.STRING,
      },
      tableId: {
        type: Sequelize.INTEGER,
        field: 'table_id',
        references: {
          model: 'tables',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATEONLY,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updated_at',
      },
      
    },);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('order');
  },
};
