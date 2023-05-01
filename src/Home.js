import React from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext';
import { useContext } from 'react';

const Home = () => {
    const { searchResult } = useContext(DataContext)
    return (
        <main className='home'>
            {searchResult.length ? (
                <Feed {...{ searchResult }} />
            ) :
                <p style={{ marginTop: "10px", marginLeft: "auto" }}>
                    No post to display
                </p>
            }
        </main>
    )
}

export default Home