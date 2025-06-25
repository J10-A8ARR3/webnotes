import { useState } from 'react';

import Post from './Post';
import classes from '../styles/PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

function PostList ({ isPosting, onStopPosting }) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(e){
        setEnteredBody(e.target.value);
    }

    function authorChangeHandler(e){
        setEnteredAuthor(e.target.value);
    }

    return (
        <>
        { isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onBodyChange={bodyChangeHandler} 
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
        )}
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body={enteredBody} />
            <Post author="Jane Smith" body="This is another post body." />
        </ul>
        </>
    )
}

export default PostList;