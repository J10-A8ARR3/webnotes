import { useState, useEffect } from 'react';

import Post from './Post';
import classes from '../styles/PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList ({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts',{
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
      <>
      { isPosting && (
      <Modal onClose={onStopPosting}>
        <NewPost 
          onCancel={onStopPosting}
          onAddPost={addPostHandler}
        />
      </Modal>
      )}
      { !isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => 
          <Post key={post.body} author={post.author} body={post.body} /> )}
        </ul>
      )}
      { !isFetching && posts.length === 0 && (
        <p className={classes.noPosts}>
          No posts found. Start posting!
        </p>
      )}
      { isFetching && (
        <p className={classes.noPosts}>
          Loading posts...
        </p>
      )}
    </>
  )
}

export default PostList;