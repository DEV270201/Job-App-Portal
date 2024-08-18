'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Applicants', { 
      id : {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
     },
     name: {
       type: Sequelize.STRING(30),
       allowNull: false
     },
     city: {
       type: Sequelize.STRING(30),
       allowNull: false
     },
     majors: {
       type: Sequelize.STRING(30),
       allowNull: false
     },
     gender: {
        type: Sequelize.STRING(10),
        allowNull: false
     },
     bio: {
        type: Sequelize.TEXT,
        allowNull: true
     },
     resume: {
        type: Sequelize.TEXT,
        allowNull: false
     },
     createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
     },
     updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
     },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Applicants');
  }
};
