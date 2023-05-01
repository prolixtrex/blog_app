import { useContext, useState } from 'react';
import DataContext from './context/DataContext';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const { posts, setPosts } = useContext(DataContext);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const newPost = { id, title: postTitle, datetime, body: postBody };

        const allPosts = [...posts, newPost];
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/');
    }

    return (
        <main className='newpost'>
            <h2>New Post</h2>
            <form className='postForm' onSubmit={handleSubmit}>
                <label htmlFor='postTitle'>Title:</label>
                <input id='postTitle' type='text' onChange={(e) => setPostTitle(e.target.value)} value={postTitle} required />
                <label htmlFor='postBody'>Post:</label>
                <textarea id='postBody' onChange={(e) => setPostBody(e.target.value)} value={postBody} required />
                <button type='submit'>Submit</button>
            </form>
        </main>
    )
}

export default NewPost;