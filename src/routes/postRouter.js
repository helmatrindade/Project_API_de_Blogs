const { Router } = require('express');
const { postController } = require('../controllers');
const { verifyToken } = require('../middleware/verifyToken');

const postRouter = Router();

postRouter.get('/', verifyToken, postController.getPost);

module.exports = postRouter;
