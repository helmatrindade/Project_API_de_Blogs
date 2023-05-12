const { userSchema } = require('./schema');

const validateUser = (dataUser) => {
  const { error } = userSchema.validate(dataUser);

  if (error) {
    return { type: 400, message: { message: error.message } };
  }
};

module.exports = {
  validateUser,
};
