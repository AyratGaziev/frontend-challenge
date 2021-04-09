import React from "react";
import "./Cat.css";
import CatImg from "./cat.jpg";

const Cat = () => {
    return (
        <div className="cats__img-wrap">
            <img className="cats__img" src={CatImg} alt="cat" />
            <div className="cats__heart"></div>
            <div className="cats__gradient"></div>
        </div>
    );
};

export default Cat;
