import Post from './Post';
import classes from '../styles/PostList.module.css';

function PostList () {
    return (
        <ul className={classes.posts}>
            <Post author="John Doe" body="This is a post body." />
            <Post author="Jane Smith" body="This is another post body." />
        </ul>
    )
}

export default PostList;