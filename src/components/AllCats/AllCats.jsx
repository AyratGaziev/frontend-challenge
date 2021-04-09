import React, { useState, useEffect } from "react";
import Cat from "../Cat/Cat";
import "./AllCats.css";
import axios from "axios";

const AllCats = ({ setLikedCats }) => {
    const [cats, setCats] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        axios
            .get(
                `https://api.thecatapi.com/v1/images/search?size=med&limit=20&page=${page}`,
                {
                    headers: {
                        "x-api-key": "16a45f53-5444-4cc2-9a01-5b27f1204950"
                    }
                }
            )
            .then((response) =>
                setCats((cats) => {
                    const resCats = response.data.map(({ id, url }) => {
                        return {
                            id,
                            url
                        };
                    });
                    return [...cats, ...resCats];
                })
            );
    }, [page]);

    let catsImgs;
    function nextPage() {
        setPage(page + 1);
    }

    if (cats.length > 0) {
        catsImgs = cats.map((cat) => {
            return (
                <Cat
                    setLikedCats={setLikedCats}
                    key={cat.id}
                    id={cat.id}
                    catId={cat.id}
                    url={cat.url}
                />
            );
        });
    }

    return (
        <div className="cats">
            <div className="cats__container">{catsImgs}</div>
            <button className="cats__more" onClick={nextPage}>
                Загрузить еще
            </button>
        </div>
    );
};

export default AllCats;
