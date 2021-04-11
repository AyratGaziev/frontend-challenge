import React, { useState } from "react";
import "./App.css";
import AllCats from "./components/AllCats/AllCats";
import Header from "./components/Header/Header";
import LikedCats from "./components/LikedCats/LikedCats.jsx";
import { HashRouter, Route } from "react-router-dom";

function App() {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(0);

    const likedCats = cats.filter((cat) => cat.liked);

    return (
        <div className="App">
            <HashRouter>
                <Header />
                <Route exact path="/">
                    <AllCats
                        page={page}
                        setPage={setPage}
                        cats={cats}
                        setCats={setCats}
                    />
                </Route>
                <Route exact path="/liked-cats">
                    <LikedCats setCats={setCats} likedCats={likedCats} />
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
