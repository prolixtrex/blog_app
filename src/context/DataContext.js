import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('blogPost')) || []);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        localStorage.setItem("blogPost", JSON.stringify(posts));
    }, [posts]);

    useEffect(() => {
        const filteredPost = posts.filter((post) => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()));
        setSearchResult(filteredPost.reverse());
    }, [posts, search])

    return (
        <DataContext.Provider value={{
            search, setSearch, searchResult, posts, setPosts
        }} >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;