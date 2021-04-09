import React, { useState } from "react";
import "./Cat.css";

const Cat = ({ setLikedCats, id, url }) => {
    const [liked, setLiked] = useState(false);

    function onLikeCatClick() {
        if (!liked) {
            setLikedCats((cats) => {
                return [...cats, { id, url }];
            });
        } else {
            setLikedCats((cats) => {
                return cats.filter((cat) => cat.id !== id);
            });
        }
        setLiked((state) => !state);
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
