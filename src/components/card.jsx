import React from "react";
import style from "../css/card.module.css";

function Card({picture, foodName}) {
    return (
    <div className={style.card}> 
        <img className={style.figureContainer} src={picture} alt="Card Image" />
        <div className={`${style.figureContainer} ${style.textName}`}>
            <p>{foodName}</p>
        </div>
    </div>
    )
}




export default Card;