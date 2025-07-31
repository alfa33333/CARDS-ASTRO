import Card from './card.jsx';
import style from "../css/app.module.css";

function App() {
  return (
    <div className={style.App}>
      <Card 
        picture="https://picsum.photos/400/300"
        foodName="KIBI"
       />
    </div>
  );
}

export default App;
