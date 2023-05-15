const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    return { type: 400, message: '"name" is required' };
  }
  
  const newCategory = await Category.create({ name });
  return { type: 201, newCategory };
};

const getCategory = async () => {
  const newCategory = await Category.findAll();
  return newCategory;
};

module.exports = {
  createCategory,
  getCategory,
};
