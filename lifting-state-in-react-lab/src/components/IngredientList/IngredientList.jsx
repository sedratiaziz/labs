// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    const { list } = props
    return  (
        <>
    <h4>Ingredient List</h4>
    <ul>
                {list.map((elem)=>
                <li key={elem.name}>
                    <h3>{elem.name}</h3>
                    <h4>{elem.color}</h4>
                    <button>add</button>
                </li>
                )}
            </ul>
</>  
)};
  
  export default IngredientList;
  