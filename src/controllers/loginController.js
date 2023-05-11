const token = require('../utils/token');
const userService = require('../services/userService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getByUserEmail(email);

  if (!email && !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!user || user.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const generateToken = token(user);

  return res.status(200).json({ generateToken });
};

module.exports = {
  login,
};
