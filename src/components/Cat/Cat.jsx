import React, { useEffect, useState } from "react";
import "./Cat.css";

const Cat = ({ setCats, id, url, liked }) => {
    const [imgLoading, setImgLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = url;
        img.addEventListener("load", () => setImgLoading(false));
        return () => {
            img.removeEventListener("load", () => setImgLoading(false));
        };
    }, [url]);

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

    const catImg = (
        <div
            style={{ backgroundImage: "url(" + url + ")" }}
            className="cats__img-wrap">
            {/* В начале грзузил картинки в тег img, но так как картинки с шириной
            меньше высоты не отображались корректно в контейнере 225px на 225px пришлось
            переделать через backgroundImage */}

            {/* <img className="cats__img" src={url} alt="cat" /> */}

            <div
                onClick={onLikeCatClick}
                className={liked ? "cats__heart liked" : "cats__heart"}></div>
            <div className="cats__gradient"></div>
        </div>
    );
    const placeholder = (
        <div className="cats__placeholder">
            <div className="cats__placeholder-effect"></div>
        </div>
    );

    return imgLoading ? placeholder : catImg;
};

export default Cat;
