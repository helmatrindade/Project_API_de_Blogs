const postService = require('../services/postService');

const getPost = async (_req, res) => {
  const post = await postService.getPost();
  return res.status(200).json(post);
};

module.exports = {
  getPost,
}; 
