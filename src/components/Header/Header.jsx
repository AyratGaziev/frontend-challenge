import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <ul className="nav">
                    <li className="nav__item selected">Все котики</li>
                    <li className="nav__item">Любимые котики</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
