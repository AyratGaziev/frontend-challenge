import React from "react";
import { Link } from "react-router-dom";
import "./DesktopMenu.css";

const DesktopMenu = ({ setSelected, linkClass }) => {
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

export default DesktopMenu;
