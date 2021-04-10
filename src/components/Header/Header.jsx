import React, { useState } from "react";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import DesktopMenu from "../DesktopMenu/DesktopMenu.jsx";

const Header = () => {
    const [selected, setSelected] = useState("all");

    function linkClass(link) {
        return selected === link ? "nav__item selected" : "nav__item";
    }

    return (
        <>
            <MobileMenu setSelected={setSelected} linkClass={linkClass} />
            <DesktopMenu setSelected={setSelected} linkClass={linkClass} />
        </>
    );
};

export default Header;
