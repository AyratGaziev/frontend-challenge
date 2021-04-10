import React from "react";
import Cat from "../Cat/Cat.jsx";
import "./LikedCats.css";
import CatImg from "./cat-gray.png";

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

    if (likedCats.length > 0) {
        return <div className="liked-cats__container">{cats}</div>;
    } else {
        return (
            <div className="no-cats">
                <img className="no-cats__img" src={CatImg} alt="cat" />
                <h2 className="no-cats__title">Здесь пока нет котов...</h2>
            </div>
        );
    }
};

export default LikedCats;
