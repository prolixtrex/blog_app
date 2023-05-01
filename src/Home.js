import React from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { searchResult } = useContext(DataContext)
    return (
        <main className='home'>
            {searchResult.length ? (
                <Feed {...{ searchResult }} />
            ) :
                <p style={{ marginTop: "10px", marginLeft: "auto" }}>
                    No post to display. Click <Link to={`/post`}>Here</Link> to create a new post.
                </p>
            }
        </main>
    )
}

export default Home