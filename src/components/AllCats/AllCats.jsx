import React, { useEffect, useRef, useState } from "react";
import Cat from "../Cat/Cat";
import "./AllCats.css";
import axios from "axios";
import Loader from "../Loader/Loader.jsx";

const AllCats = ({ cats, setCats, page, setPage }) => {
    const prevPage = useRef(page);
    const catsCount = 15;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (prevPage.current === page && cats.length !== 0 && !loading) return;
        axios
            .get(
                `https://api.thecatapi.com/v1/images/search?size=med&limit=${catsCount}&page=${page}`,
                {
                    headers: {
                        "x-api-key": "16a45f53-5444-4cc2-9a01-5b27f1204950"
                    }
                }
            )
            .then((response) => {
                setLoading(false);
                setCats((cats) => {
                    const resCats = response.data.map(({ id, url }) => {
                        return {
                            id,
                            url,
                            liked: false
                        };
                    });
                    return [...cats, ...resCats];
                });
            });
    }, [page, setCats, loading]);

    useEffect(() => {
        function scrollHandler(e) {
            const scrollPage = e.target.documentElement;

            if (
                scrollPage.scrollHeight - scrollPage.scrollTop ===
                scrollPage.clientHeight
            ) {
                setLoading(true);
                setPage(page + 1);
            }
        }

        document.addEventListener("scroll", scrollHandler);
        return () => {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    let catsImgs;
    // function nextPage() {
    //     setPage(page + 1);
    // }

    if (cats.length > 0) {
        catsImgs = cats.map((cat) => {
            return (
                <Cat
                    setCats={setCats}
                    key={cat.id}
                    id={cat.id}
                    url={cat.url}
                    liked={cat.liked}
                />
            );
        });
    }

    return (
        <div className="cats">
            <div className="cats__container">{catsImgs}</div>

            {loading || cats.length === 0 ? <Loader /> : null}

            {/* В начале сделал вариант загрузки по нажатию на кнопку */}
            {/* <button className="cats__more" onClick={nextPage}>
                Загрузить еще
            </button> */}
        </div>
    );
};

export default AllCats;
