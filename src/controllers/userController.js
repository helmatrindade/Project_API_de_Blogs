const userService = require('../services/userService');
const { User } = require('../models');

const createUser = async (req, res) => {
  const email = await userService.getByUserEmail(req.body.email);

  if (email) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const { type, message } = await userService.createUser(req.body);

  return res.status(type).json(message);
};

const getUser = async (_req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {  
  const { id } = req.params;
  const { type, message, users } = await userService.getUserById(id);

  if (type === 404) {
    return res.status(type).json({ message });
  }

  return res.status(type).json(users);
};

module.exports = {
  createUser,
  getUser,
  getUserById,
};
