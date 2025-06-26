import { useState } from 'react';

import Post from './Post';
import classes from '../styles/PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList ({ isPosting, onStopPosting }) {

    return (
        <>
        { isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
          />
        </Modal>
        )}
        <ul className={classes.posts}>

        </ul>
        </>
    )
}

export default PostList;