import React, { useState } from "react";
import "./App.css";
import AllCats from "./components/AllCats/AllCats";
import Header from "./components/Header/Header";
import LikedCats from "./components/LikedCats/LikedCats.jsx";

function App() {
    const [likedCats, setLikedCats] = useState([]);

    console.log(likedCats);
    return (
        <div className="App">
            <Header />
            <AllCats setLikedCats={setLikedCats} />
            <LikedCats likedCats={likedCats} />
        </div>
    );
}

export default App;
