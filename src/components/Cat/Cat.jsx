import React from "react";
import "./Cat.css";

const Cat = ({ setCats, id, url, liked }) => {
    function onLikeCatClick() {
        if (!liked) {
            setCats((cats) => {
                const idx = cats.findIndex((cat) => cat.id === id);
                const newCats = cats.slice();
                newCats[idx] = { ...newCats[idx], liked: true };
                return newCats;
            });
        } else {
            setCats((cats) => {
                const idx = cats.findIndex((cat) => cat.id === id);
                const newCats = cats.slice();
                newCats[idx] = { ...newCats[idx], liked: false };
                return newCats;
            });
        }
    }

    return (
        <div className="cats__img-wrap">
            <img className="cats__img" src={url} alt="cat" />
            <div
                onClick={onLikeCatClick}
                className={liked ? "cats__heart liked" : "cats__heart"}></div>
            <div className="cats__gradient"></div>
        </div>
    );
};

export default Cat;
