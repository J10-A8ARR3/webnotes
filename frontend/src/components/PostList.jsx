import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import classes from '../styles/PostList.module.css';


function PostList () {
  const posts = useLoaderData();

  return (
      <>
      { posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => 
          <Post key={post.body} author={post.author} body={post.body} /> )}
        </ul>
      )}
      {  posts.length === 0 && (
        <p className={classes.noPosts}>
          No posts found. Start posting!
        </p>
      )}
    </>
  )
}

export default PostList;