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