import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './detailpage.css';

const DetailPage = () => {

    const { id } = useParams();
    const [detailPage, setDetailPage] = useState({});

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    useEffect(() => {
        fetch(`http://localhost:5000/destination/${id}`)
            .then((response) => response.json())
            .then((json) => setDetailPage(json.data))
    }, [id])

    console.log(id)
    return (
        <div className="detailPage">
            <div style={{ backgroundImage: `url(${detailPage.imgdetailpage})` }} className="detailHeader">
                <h1>{detailPage.title}</h1>
            </div>
            <div className="detailMain">
                <div className="detailButton" onClick={handleClick}>
                    <div className="btn-one">
                        <span>Go back to homepage</span>
                    </div>
                </div>
                <div className="detailAuthorInfo">
                    <img src={detailPage.authorimg} alt={detailPage.authorname} />
                    <span>{detailPage.authorname}</span>
                    <h3>more info about the author:</h3>
                    <div>{detailPage.authorresume}</div>
                </div>
                <h2>{detailPage.location}</h2>
                <p>{detailPage.description}</p>
                <img src={detailPage.favoriteplace} alt={detailPage.location} />
            </div>

        </div>
        /*<div>
            <button type="button" onClick={handleClick}>
      Go home
    </button>
            <img src={detailPage.img} alt={detailPage.title} />
            <h2>{detailPage.title}</h2>
            <p>{visiting}</p>
        </div>*/


    )
}


export default DetailPage; 