const userService = require('../services/userService');

const createUser = async (req, res) => {
  const email = await userService.getByUserEmail(req.body.email);

  if (email) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const { type, message } = await userService.createUser(req.body);

  return res.status(type).json(message);
};

module.exports = {
  createUser,
};
