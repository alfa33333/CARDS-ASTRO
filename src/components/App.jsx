import React from 'react';
import Card from './card.jsx';
import Button from './Button.jsx';
import NavBar from './NavBar.jsx';
import style from "../css/app.module.css";



function App() {
  const [isCardShown, setIsCardShown] = React.useState(false);

  const toggleCard = () => {
    setIsCardShown(!isCardShown);
  };

  return (
    <div className={style.App}>
      <NavBar />  
      <Card
        picture="https://picsum.photos/400/300"
        foodName="KIBI"
        isCardShown={isCardShown}
       />
       <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Button toggleCard={toggleCard}>{isCardShown ? "Hide" : "Show"}</Button>
       </div>
    </div>
  );
}

export default App;
