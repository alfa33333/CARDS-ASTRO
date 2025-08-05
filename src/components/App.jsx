import React from 'react';
import Card from './card.jsx';
import Button from './Button.jsx';
import NavBar from './NavBar.jsx';
import style from "../css/app.module.css";


const foodItems = [
  { picture: "https://picsum.photos/400/300", foodName: "KIBI" },
  { picture: "https://picsum.photos/400/300", foodName: "NotKIBI" },
];

function LibraryApp() {
  return (
    <div className={style.App}>
      <h1>Library</h1>
      {foodItems.map((item, index) => (
        <Card
          key={index}
          picture={item.picture}
          foodName={item.foodName}
          isCardShown={true}
        />
      ))}
      <Card
        picture="https://picsum.photos/400/300"
        foodName="KIBI"
        isCardShown={true}
      />
    </div>
  );
}

function App() {
  const [isCardShown, setIsCardShown] = React.useState(false);

  const toggleCard = () => {
    setIsCardShown(!isCardShown);
  };

  return (
    <div className={style.App}>
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
export { LibraryApp };