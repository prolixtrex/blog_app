import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import DataContext from "./context/DataContext";
import format from "date-fns/format";

const EditPost = () => {
    const [editPostTitle, setEditPostTitle] = useState("");
    const [editPostBody, setEditPostBody] = useState("");
    const { posts, setPosts } = useContext(DataContext);
    const { id } = useParams();
    const editPost = posts.find(post => (post.id).toString() === id);
    const navigate = useNavigate();

    useEffect(() => {
        if (editPost) {
            setEditPostTitle(editPost.title);
            setEditPostBody(editPost.body);
        }
    }, [editPost, setEditPostTitle, setEditPostBody])

    const handleEdit = (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const editedPost = { id, title: editPostTitle, datetime, body: editPostBody };
        setPosts(posts.map((post) => post.id === id ? editedPost : post))
        setEditPostTitle("");
        setEditPostBody("");
        navigate("/");
    }

    return (
        <main className='newpost'>
            {editPostTitle &&
                <>
                    <h2>Edit Post</h2>
                    <form className='postForm' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor='postTitle'>Title:</label>
                        <input id='postTitle' type='text' onChange={(e) => setEditPostTitle(e.target.value)} value={editPostTitle} required />
                        <label htmlFor='postBody'>Post:</label>
                        <textarea id='postBody' onChange={(e) => setEditPostBody(e.target.value)} value={editPostBody} required />
                        <button type='submit' onClick={() => handleEdit(editPost.id)}>Submit</button>
                        <Link to={`/post/${id}`}><button style={{ width: "100%" }}>Cancel</button></Link>
                    </form>
                </>
            }
            {!editPostTitle &&
                <>
                    <h2>Page not found</h2>
                    <p>The post you are looking for is not found</p>
                    <p>Please Visit our <Link to="/">home page</Link></p>
                </>
            }
        </main>
    )
}

export default EditPost