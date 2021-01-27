import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();

  const postsReducer = useSelector((state) => state.posts);
  const { posts } = postsReducer;

  console.log(posts);

  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
