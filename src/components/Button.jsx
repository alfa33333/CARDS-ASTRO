import style from "../css/app.module.css";


function Button({children, toggleCard}) {
 return (
    <div className={style.button} onClick={toggleCard}>{children}</div>
 );
}

export default Button;