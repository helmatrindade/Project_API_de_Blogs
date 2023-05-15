const { Router } = require('express');
const { categoryService } = require('../controllers');
const { verifyToken } = require('../middleware/verifyToken');

const categoryRouter = Router();

categoryRouter.post('/', verifyToken, categoryService.createCategory);

module.exports = categoryRouter;
