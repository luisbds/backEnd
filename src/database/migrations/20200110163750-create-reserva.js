'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reserva', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      data_Entrada: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      date_Saida:{
         type: Sequelize.DATE,
         allowNull: false,                  
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('reserva')
  }
};
