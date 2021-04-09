import React, { useState } from "react";
import "./App.css";
import AllCats from "./components/AllCats/AllCats";
import Header from "./components/Header/Header";
import LikedCats from "./components/LikedCats/LikedCats.jsx";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(0);

    const likedCats = cats.filter((cat) => cat.liked);

    console.log(likedCats);
    return (
        <div className="App">
            <BrowserRouter>
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
            </BrowserRouter>
        </div>
    );
}

export default App;
