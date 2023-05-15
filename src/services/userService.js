const { User } = require('../models');
const { generateToken } = require('../utils/token');
const { validateUser } = require('./validation/validationUser');

const getByUserEmail = async (email) => {
  const user = User.findOne({ where: { email } });
  return user;
};

const createUser = async (newUser) => {
  const error = validateUser(newUser);

  if (error) {
    return { type: error.type, message: error.message };
  }

  const { password: _password, ...userWhithoutpassword } = newUser;
  
  const token = generateToken(userWhithoutpassword);
  await User.create(newUser);

  return { type: 201, message: { token } };
};

const getUser = async () => {  
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getUserById = async (id) => {  
  const users = await User.findOne({ where: { id }, 
    attributes: { exclude: ['password'] },
  });

  if (!users) {
    return { type: 404, message: 'User does not exist' };
  }

  return { type: 200, users };
};

module.exports = {
  getByUserEmail,
  createUser,
  getUser,
  getUserById,
};
