const { Router } = require('express');
const { userController } = require('../controllers');
const { verifyToken } = require('../middleware/verifyToken');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', verifyToken, userController.getUser);

module.exports = userRouter;
