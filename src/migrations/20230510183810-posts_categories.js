'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      category_Id: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'categories',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
      await queryInterface.dropTable('post_categories');
  }
};
