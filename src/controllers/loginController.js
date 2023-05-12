const userService = require('../services/userService');
const { generateToken } = require('../utils/token');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await userService.getByUserEmail(email);

  if (!user || user.dataValues.password !== password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const { id } = user.dataValues;
  const token = generateToken({ id, email });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
