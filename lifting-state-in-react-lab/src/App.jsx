// src/App.jsx

import { useState } from 'react';
import './App.css';
import BurgerStack from './components/BurgerStack/BurgerStack';
import IngredientList from './components/IngredientList/IngredientList';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  
  const [burgerStack, setBurgerStack] = useState([])
  const [ingredStack, setIngredStack] = useState(availableIngredients)

  function addToBurger(obj) {
    setBurgerStack([...burgerStack, obj]);
    removeFromIngred(obj.name)

  }
  
  
  function removeFromBurger() {  
    const lastIngredient = burgerStack[burgerStack.length - 1];
    if (lastIngredient) {
      setBurgerStack((prevStack) => prevStack.slice(0, -1));
      addToIngred(lastIngredient);
    }
  };
  
  
  function addToIngred(obj) {
    setIngredStack((prevIngredStack) => [...prevIngredStack, obj]);
  }


function removeFromIngred(name) {
  setIngredStack((prevIngredStack) =>
    prevIngredStack.filter((ingred) => ingred.name !== name)
  );
}


  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList list={ingredStack} addToBurger={addToBurger} removeFromIngred={removeFromIngred} />
      <BurgerStack layers={burgerStack} removeFromBurger={removeFromBurger} />
      </section>
    </main>
  );
};

export default App;
