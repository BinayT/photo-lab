const getPosts = (req, res) => {
  res.json({ msg: 'Posts fetch' });
};

const createPost = (req, res) => {
  res.json({ msg: 'Post Creation' });
};

export { getPosts, createPost };
