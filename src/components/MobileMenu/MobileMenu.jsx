import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileMenu.css";

const MobileMenu = ({ setSelected, linkClass }) => {
    function burgerClass() {
        return active === true
            ? "mobile__burger-wrap mobile__burger-wrap_active"
            : "mobile__burger-wrap";
    }

    function mobileMenuClass() {
        return active === true
            ? "mobile__wrap mobile__wrap_show"
            : "mobile__wrap";
    }
    function mobileBgClass() {
        return active === true ? "mobile__bg mobile__bg_show" : "mobile__bg";
    }

    const [active, setActive] = useState(false);

    return (
        <header className="mobile">
            <div className={mobileMenuClass()}>
                <ul className="mobile__nav">
                    <li
                        onClick={() => {
                            setActive((active) => !active);
                            setSelected("/");
                        }}
                        className={linkClass("/")}>
                        <Link to="/">Все котики</Link>
                    </li>
                    <li
                        onClick={() => {
                            setActive((active) => !active);
                            setSelected("/liked-cats");
                        }}
                        className={linkClass("/liked-cats")}>
                        <Link to="/liked-cats">Любимые котики</Link>
                    </li>
                </ul>
            </div>
            <div
                onClick={() => setActive((active) => !active)}
                className={burgerClass()}>
                <div className="mobile__burger"></div>
            </div>

            <div
                onClick={() => setActive((active) => !active)}
                className={mobileBgClass()}></div>
        </header>
    );
};

export default MobileMenu;
