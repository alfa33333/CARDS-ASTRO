import React from "react";
import style from "../css/card.module.css";

function Card({picture, foodName, isCardShown}) {
    return (
    <div className={style.card}> 
        {isCardShown && <img className={style.figureContainer} src={picture} alt="Card Image" />}
        {isCardShown && <div className={`${style.figureContainer} ${style.textName}`}>
            <p>{foodName}</p>
        </div>}
    </div>
    )
}




export default Card;