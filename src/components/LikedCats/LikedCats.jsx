import React from "react";
import Cat from "../Cat/Cat.jsx";
import "./LikedCats.css";

const LikedCats = ({ likedCats }) => {
    let cats;
    if (likedCats.length > 0) {
        cats = likedCats.map(({ id, url }) => {
            return <Cat key={id} id={id} url={url} />;
        });
    }
    return <div className="cats__container">{cats}</div>;
};

export default LikedCats;
