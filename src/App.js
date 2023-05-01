import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import Missing from "./Missing";
import PostPage from "./PostPage";
import NewPost from "./NewPost";
import About from "./About";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {

    return (
        <div className="App">
            <Header title="React JS Blog" />
            <DataProvider>
                <Nav />
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/post" Component={NewPost} />
                    <Route path="/edit/:id" Component={EditPost} />
                    <Route path="/post/:id" Component={PostPage} />
                    <Route path="/about" Component={About} />
                    <Route path="*" Component={Missing} />
                </Routes>
            </DataProvider>
            <Footer />

        </div >
    );
}

export default App;
