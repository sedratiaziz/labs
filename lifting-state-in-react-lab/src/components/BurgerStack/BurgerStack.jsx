// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  const { layers, removeFromBurger } = props  
  
  return ( 
    <>
    <h4>Burger Stack</h4>
    <ul>
        {layers.map((layer, index)=>
          <li key={`${layer.name}-${index}`}>
              <h3>{layer.name}</h3>
              <h4>{layer.color}</h4>
              <button onClick={()=>{removeFromBurger()}}>remove</button>
          </li>
        )}      
    </ul>
    </>
  )};
  
  export default BurgerStack;
  