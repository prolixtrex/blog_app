import { createStore, computed, thunk, action } from "easy-peasy";
import api from './api/posts';

export default createStore({
    posts: [],
    setPosts: action((state, payload) => {
        state.posts = payload
    }),

    editPostTitle: "",
    setEditPostTitle: action((state, payload) => {
        state.editPostTitle = payload
    }),

    editPostBody: "",
    setEditPostBody: action((state, payload) => {
        state.editPostBody = payload
    }),

    postTitle: "",
    setPostTitle: action((state, payload) => {
        state.postTitle = payload
    }),

    postBody: "",
    setPostBody: action((state, payload) => {
        state.postBody = payload
    }),

    search: "",
    setSearch: action((state, payload) => {
        state.search = payload
    }),

    searchResult: "",
    setSearchResult: action((state, payload) => {
        state.searchResult = payload
    }),

    postCount: computed((state) => state.posts.length),

    getPostById: computed((state) => {
        return (id) => state.posts.find((post) => (post.id).toString() === id)
    }),

    savePost: thunk(async (actions, newPost, helpers) => {
        const { posts } = helpers.getState();
        try {
            const response = await api.post("/posts", newPost)
            actions.setPosts([...posts, response.data]);
            actions.setPostTitle('');
            actions.setPostBody('');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }),

    deletePost: thunk(async (actions, id, helpers) => {
        const { posts } = helpers.getState();
        try {
            await api.delete(`/posts/${id}`);
            const filteredPost = posts.filter((post) => post.id !== id);
            actions.setPosts(filteredPost);
        } catch (err) {
            console.log(`Error: ${err.message}`)
        }
    }),

    editPost: thunk(async (actions, editedPost, helpers) => {
        const { posts } = helpers.getState();
        const { id } = editedPost;
        try {
            const response = await api.put(`/posts/${id}`, editedPost);
            actions.setPosts(posts.map((post) => post.id === id ? { ...response.data } : post));
            actions.setEditPostTitle("");
            actions.setEditPostBody("");
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    })
})