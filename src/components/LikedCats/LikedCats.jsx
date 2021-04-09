import React from "react";
import Cat from "../Cat/Cat.jsx";
import "./LikedCats.css";

const LikedCats = ({ likedCats, setCats }) => {
    let cats;
    if (likedCats.length > 0) {
        cats = likedCats.map(({ id, url, liked }) => {
            return (
                <Cat
                    setCats={setCats}
                    key={id}
                    id={id}
                    url={url}
                    liked={liked}
                />
            );
        });
    }
    return <div className="cats__container">{cats}</div>;
};

export default LikedCats;
