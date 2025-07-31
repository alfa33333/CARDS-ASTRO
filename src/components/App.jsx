import Card from './card.jsx';
import NavBar from './NavBar.jsx';
import style from "../css/app.module.css";

function App() {
  return (
    <div className={style.App}>
      <NavBar />  
      <Card
        picture="https://picsum.photos/400/300"
        foodName="KIBI"
       />

    </div>
  );
}

export default App;
