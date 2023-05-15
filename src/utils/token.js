require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (data) => {
  try {
    const obj = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({
      payload: data,
    }, secret, obj);

    return token;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  generateToken,
};
