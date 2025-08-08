import React from 'react';
import Card from './card.jsx';
import Button from './Button.jsx';
import style from "../css/app.module.css";

const BASE_URL = import.meta.env.BASE_URL;

const foodItems = [
  { picture: `${BASE_URL}/images/kibi.jpg`, foodName: "KIBI" },
  { picture: `${BASE_URL}/images/cheeseburger.webp`, foodName: "Burger" },
  { picture: `${BASE_URL}/images/pastor.webp`, foodName: "Taco pastor" },
  { picture: `${BASE_URL}/images/pizza.jpg`, foodName: "Pizza" },
  { picture: `${BASE_URL}/images/curry.jpg`, foodName: "Curry Japones" },
  { picture: `${BASE_URL}/images/chicken.webp`, foodName: "Grilled chicken" },
  { picture: `${BASE_URL}/images/salmon.jpg`, foodName: "Grilled Salmon with pesto" }
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
    </div>
  );
}

function App() {
  const [isCardShown, setIsCardShown] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(0);

  const toggleCard = () => {
    const randomIndex = Math.floor(Math.random() * foodItems.length);
    console.log("Random Index:", randomIndex);
    setSelectedCard(randomIndex);
    setIsCardShown(!isCardShown);
  };

  return (
    <div className={style.App}>
      <Card
        picture={foodItems[selectedCard].picture}
        foodName={foodItems[selectedCard].foodName}
        isCardShown={isCardShown}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button toggleCard={toggleCard}>{isCardShown ? "Pull" : "Show"}</Button>
       </div>
    </div>
  );
}

export default App;
export { LibraryApp };