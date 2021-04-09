import React from "react";
import Cat from "../Cat/Cat";
import "./AllCats.css";

const AllCats = () => {
    return (
        <div className="cats">
            <div className="cats__container">
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
            </div>
        </div>
    );
};

export default AllCats;
