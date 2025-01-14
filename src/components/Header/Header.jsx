import React, { useState } from "react";
import "./Header.css";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import DesktopMenu from "../DesktopMenu/DesktopMenu.jsx";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    const [selected, setSelected] = useState(location.pathname);

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
