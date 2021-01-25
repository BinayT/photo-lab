import postModel from '../models/postModel.js';

const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createPost = (req, res) => {
  res.json({ msg: 'Post Creation' });
};

export { getPosts, createPost };
