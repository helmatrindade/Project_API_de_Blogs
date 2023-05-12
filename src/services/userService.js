const { User } = require('../models');

const getByUserEmail = async (email) => {
  const user = User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getByUserEmail,
};
