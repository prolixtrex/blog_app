import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState(
        [
            {
                "id": 1,
                "title": "My first post",
                "datetime": "July 27, 2023 04:21:36 PM",
                "body": "This is my first post. This is my first post. This is my first post. This is my first post."
            },
            {
                "id": 2,
                "title": "My second post",
                "datetime": "July 27, 2023 04:21:36 PM",
                "body": "This is my second post. This is my second post. This is my second post. This is my second post."
            },
            {
                "id": 3,
                "title": "My third post",
                "datetime": "July 27, 2023 04:21:36 PM",
                "body": "This is my third post. This is my third post. This is my third post. This is my third post."
            },
            {
                "id": 4,
                "title": "My fourth post",
                "datetime": "July 27, 2023 04:21:36 PM",
                "body": "This is my fourth post. This is my fourth post. This is my fourth post. This is my fourth post."
            },
        ]
    );
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

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