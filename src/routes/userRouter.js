const { Router } = require('express');
const { userController } = require('../controllers');
const { verifyToken } = require('../middleware/verifyToken');

const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', verifyToken, userController.getUser);
userRouter.get('/:id', verifyToken, userController.getUserById);

module.exports = userRouter;
