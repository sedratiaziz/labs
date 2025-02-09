// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  const { layers } = props  
  return ( 
    <>
    <h4>Burger Stack</h4>
    <ul>
      {layers.map((layer)=>{
          <li>
                    <h3>{layer.name}</h3>
                    <h4>{layer.color}</h4>
                    <button>remove</button>
          </li>
        })}      
    </ul>
    </>
  )};
  
  export default BurgerStack;
  