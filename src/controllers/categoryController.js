const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { type, message, newCategory } = await categoryService.createCategory(name);

  if (type === 400) {
    return res.status(type).json({ message });
  }

  return res.status(type).json(newCategory);
};

const getCategory = async (_req, res) => {
  const newCategory = await categoryService.getCategory();

  return res.status(200).json(newCategory);
};

module.exports = {
  createCategory,
  getCategory,
};
