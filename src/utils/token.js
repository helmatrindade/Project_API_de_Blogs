require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (data) => {
  try {
    const obj = {
      expiresIn: '7d',
      algorithn: 'HS256',
    };

    const token = jwt.sign({
      payload: data,
    }, JWT_SECRET, obj);

    return token;
  } catch (error) {
    return error.message;
  }
};

module.exports = generateToken;
