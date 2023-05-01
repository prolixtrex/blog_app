import { Link } from 'react-router-dom'
import DataContext from './context/DataContext';
import { useContext } from 'react';

const Nav = () => {
    const { search, setSearch } = useContext(DataContext);

    return (
        <nav className='nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='search'>Search Posts</label>
                <input id="search" type='text' value={search} placeholder='Search Posts' onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/post"><li>Post</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Nav