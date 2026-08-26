'use strict';

const { QueryTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    // Insert users
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'john@example.com',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'Alex Cruz',
        email: 'alex@example.com',
        createdAt: now,
        updatedAt: now
      }
    ]);

    // Get the actual IDs created by PostgreSQL
    const users = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Users";',
      {
        type: QueryTypes.SELECT
      }
    );

    const idOf = (name) => {
      const user = users.find(user => user.name === name);
      return user.id;
    };

    // Insert tasks
    await queryInterface.bulkInsert('Tasks', [
      {
        title: 'Finish assignment',
        dueDate: new Date('2026-08-27'),
        completed: false,
        userId: idOf('John Doe'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Study Sequelize',
        dueDate: new Date('2026-08-28'),
        completed: false,
        userId: idOf('John Doe'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Review project',
        dueDate: new Date('2026-08-29'),
        completed: true,
        userId: idOf('Jane Smith'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Test API',
        dueDate: new Date('2026-08-30'),
        completed: false,
        userId: idOf('Jane Smith'),
        createdAt: now,
        updatedAt: now
      },
      {
        title: 'Prepare presentation',
        dueDate: new Date('2026-08-31'),
        completed: false,
        userId: idOf('Alex Cruz'),
        createdAt: now,
        updatedAt: now
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};