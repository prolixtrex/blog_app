import { useState, useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import DataContext from './context/DataContext';

const PostPage = () => {
    const { posts, setPosts } = useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    const [displayConfirm, setDisplayConfirm] = useState("none");
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        const filteredPost = posts.filter((post) => post.id !== id);
        setPosts(filteredPost);
        navigate("/");
    }

    return (
        <main className='postPage'>
            <article>
                {post &&
                    <>
                        <h2 className='postTitle'>{post.title}</h2>
                        <p className='postDate'>{post.datetime}</p>
                        <p className='postBody'>{post.body}</p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                            <button className='deleteButton' onClick={() => setDisplayConfirm("block")}>Delete Post</button>
                        </form>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post Not found</h2>
                        <p>Sorry no post was found</p>
                        <p>
                            <Link to="/">Visit our Home Page</Link>
                        </p>
                    </>
                }
            </article>
            <div className='confirmDelete' style={{ display: displayConfirm }}>
                <div className='confirmBox'>
                    <p>Are you sure you want to delete this post?</p>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <button className='deleteButton' onClick={() => handleDelete(post.id)}>Confirm</button>
                        <button className='editButton' onClick={() => setDisplayConfirm("none")}>Cancel</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default PostPage