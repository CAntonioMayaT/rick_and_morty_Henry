import React from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar(props) {


   const [inputValue, setInputValue] = React.useState([]);
   const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes usar el valor de 'inputValue' como necesites
      console.log('Valor del input:', inputValue);
      // También puedes realizar otras acciones, como enviar el valor a la API, etc.
    };
   return (
      <div className={Style.DivSearchBar}>
          <input className={Style.SearchBar} type='text' placeholder="Busca un personaje... " onChange={handleInputChange} />
          <button className={Style.InputButton} onClick={handleSubmit}>ID</button>
           <button className={Style.InputButton} onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
