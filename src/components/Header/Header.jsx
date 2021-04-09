import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [selected, setSelected] = useState("all");

    function linkClass(link) {
        return selected === link ? "nav__item selected" : "nav__item";
    }

    return (
        <header className="header">
            <div className="container">
                <ul className="nav">
                    <li
                        onClick={() => setSelected("all")}
                        className={linkClass("all")}>
                        <Link to="/">Все котики</Link>
                    </li>
                    <li
                        onClick={() => setSelected("liked")}
                        className={linkClass("liked")}>
                        <Link to="/liked-cats">Любимые котики</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
