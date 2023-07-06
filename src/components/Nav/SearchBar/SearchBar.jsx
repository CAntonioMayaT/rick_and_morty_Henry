import React from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar(props) {


   const [inputValue, setInputValue] = React.useState([]);
   const handleInputChange = (event) => {
      setInputValue(event.target.value);
      };
  
  
   return (
      <div className={Style.DivSearchBar}>
          <input className={Style.SearchBar} type='text' placeholder="Busca un personaje... " onChange={handleInputChange} value={inputValue}/>
           <button className={Style.InputButton} onClick={() => {props.onSearch(inputValue)}}>Agregar</button> 
      </div>
   );
}
