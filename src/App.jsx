import React from "react";
import "./App.css";
import AllCats from "./components/AllCats/AllCats";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <AllCats />
        </div>
    );
}

export default App;
